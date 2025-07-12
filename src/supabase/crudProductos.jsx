import Swal from "sweetalert2";
import { supabase } from "../index";
const tabla = "productos";

export async function InsertarProductos(p) {
    const { error, data } = await supabase.rpc("insertarproductos", p);
    console.log("[PRODUCTO-CREATE]", data);
    if (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
        });
        return;
    }
    return data;
}

export async function MostrarProductos(p) {
    const { data } = await supabase.from(tabla).select().eq("id_empresa", p.id_empresa).order("id", { ascending: false });
    return data;
}

export async function BuscarProductos(p) {
    const { data } = await supabase.from(tabla).select().eq("id_empresa", p.id_empresa).ilike("nombre", "%" + p.Productos + "%");
    return data;
}

export async function EliminarProductos(p) {
    const { error } = await supabase.from(tabla).delete().eq("id", p.id);
    if (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
        });
        return;
    }
}

export async function EditarProductos(p) {
    const { error } = await supabase.rpc("editarProductos", p)
    if (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
        });
        return;
    }

    if (filenew != "-" && filenew.size != undefined) {
        if (fileold != "-") {
            await EditarIconoStorage(p._id, filenew)
        }
        else {
            const dataImagen = await subirImagen(p._id, filenew)
            const piconoeditar = {
                icono: dataImagen.publicUrl,
                id: p._id,
            };
            await EditarIconosProductos(piconoeditar);
        }
    }
}

export async function EditarIconoStorage(id, file) {
    const ruta = "Productos/" + id;
    await supabase.storage.from("imagenes").update(ruta, file, {
        cacheControl: "0",
        upsert: true
    })
}
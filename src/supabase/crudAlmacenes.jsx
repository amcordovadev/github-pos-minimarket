import Swal from "sweetalert2";
import { supabase } from "../index";
const tabla = "almacenes";

export async function InsertarStockAlmacen(p) {
    console.log("[INSERT-STOCK-ALMACEN]",p)
    const { error } = await supabase.from(tabla).insert(p);
    if (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
        });
        return;
    }
    return;
}
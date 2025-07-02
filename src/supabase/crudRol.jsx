import { supabase } from "../index";
const tabla = "roles";

export async function MostrarRolesPorNombre(p) {
    const {data} = await supabase.from(tabla).select().eq("nombre", p.nombre).maybeSingle();
    return data;
}
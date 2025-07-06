import { create } from "zustand";
import { MostrarUsuarios, ObtenerIdAuthSupabase } from "../index";

export const useUsuariosStore = create((set) => ({
    datausuarios: [],
    mostrarusuarios: async() => {
        const idauth = await ObtenerIdAuthSupabase();
        //Mostrar los usuarios
        const response = await MostrarUsuarios({id_auth: idauth});
        set({datausuarios:response})
        //La respuesta sirve para tanStack
        return response;
    }
}))
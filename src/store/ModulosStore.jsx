import { create } from "zustand";
import { MostrarModulos } from "../index";

export const useModulosStore = create((set) => ({
    dataModulos: [],
    mostrarModulos: async() => {
        //Mostrar los modulos
        const response = await MostrarModulos()
        set({dataModulos:response})
        //La respuesta sirve para tanStack
        return response;
    }
}))
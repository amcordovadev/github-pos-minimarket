import { create } from "zustand";
import { InsertarEmpresa, MostrarEmpresaXidusuario } from "../index";
import { data } from "react-router-dom";

export const useEmpresaStore = create((set) => ({
    dataempresa: [],
    mostrarempresa: async (p) => {
        const response = await MostrarEmpresaXidusuario(p);
        set({dataempresa:response});
        //para devolver los datos de la empresa en la query, se devuelve el mismo response
        return response;
    },
    insertarempresa: async (p) => {
        const response = await InsertarEmpresa(p);
        console.log("respuesta empresa", response);
    },
}));
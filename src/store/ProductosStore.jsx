import { create } from "zustand";
import { BuscarProductos, EditarProductos, EliminarProductos, GenerarCodigo, InsertarProductos, MostrarProductos } from "../index";

export const useProductosStore = create((set, get) => ({
    buscador: "",
    setBuscador: (p) => {
        set({ buscador: p });
    },
    dataProductos: [],
    ProductosItemSelect: [],
    parametros: {},
    mostrarProductos: async (p) => {
        const response = await MostrarProductos(p)
        set({ parametros: p })
        set({ dataProductos: response })
        set({ ProductosItemSelect: response[0] })
        return response;
    },
    selectProductos: (p) => {
        set({ ProductosItemSelect: p })
    },
    insertarProductos: async (p) => {
        //response para obtener lo que se necesita de InsertarProductos, retornar id
        const response = await InsertarProductos(p);
        console.log("[response insertarProductos]", response)
        const { mostrarProductos } = get();
        const { parametros } = get();
        set(mostrarProductos(parametros))
        return response;
    },
    eliminarProductos: async (p) => {
        await EliminarProductos(p)
        const { mostrarProductos } = get();
        const { parametros } = get();
        set(mostrarProductos(parametros))
    },
    editarProductos: async (p) => {
        await EditarProductos(p)
        const { mostrarProductos } = get();
        const { parametros } = get();
        set(mostrarProductos(parametros))
    },
    buscarProductos: async (p) => {
        const response = await BuscarProductos(p)
        set({ dataProductos: response })
        return response;
    },
    codigogenerado: 0,
    generarCodigo: async () => {
        const response = GenerarCodigo({id:2})
        set({codigogenerado:response})
        return response;
    }
}));
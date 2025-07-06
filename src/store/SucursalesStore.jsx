import { create } from "zustand";
import { MostrarSucursales } from "../index";

export const useSucursalesStore = create((set) => ({
    sucursalesItemSelect: [],
    selectSucursal: (p) => {
        set({sucursalesItemSelect:p})
    },
    dataSucursales: [],
    mostrarSucursales: async(p) => {
        //Mostrar los modulos
        const response = await MostrarSucursales(p)
        set({dataSucursales:response})

        //Le pedimos que sobreescriba el dataSucursales para que me muestre el primet item [0]
        set({sucursalesItemSelect:response[0]})
        //La respuesta sirve para tanStack
        return response;
    },
}))
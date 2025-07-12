import { create } from "zustand";
import { InsertarStockAlmacen } from "../index";

export const useAlmacenesStore = create((set) => ({
    dataModulos: [],
    insertarStockAlmacenes: async(p) => {
        await InsertarStockAlmacen(p);
    }
}))
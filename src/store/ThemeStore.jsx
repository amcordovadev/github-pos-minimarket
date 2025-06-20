import { create } from "zustand";
import { Dark, Light } from "../styles/Themes"
export const useThemeStore = create((set, get) => ({
    theme: "light",
    themeStyle: Light,
    setTheme: () => {
        //Devuelvo el estado en el que me encuentro
        const { theme } = get();
        //Se usan llaves porque se interactuan con objetos
        //Aplica operador ternario
        set({ theme: theme === "light" ? "dark" : "light" })
        set({ themeStyle: theme === "light" ? Dark : Light })
    }
}))
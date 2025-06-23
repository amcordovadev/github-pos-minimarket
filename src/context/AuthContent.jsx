//Contexto global por lo cual sera el único

import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.config";
//AuthContext empieza vacio
const AuthContext = createContext();

//Utilizamos hoock nativo de React
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        const { data } = supabase.auth.onAuthStateChange(async (event,session) => {
            if(session?.user == null){
                setUser(null)
            } else {
                //.user porque contiene todos los datos que me interesa
                setUser(session?.user)
                console.log("session", session.user);
            }
            // console.log(event);
        });
        return () => {
            //siempre escuchara al bak-end si el usuario se ha logeado o cerro sesión y si el tolen expiro de google
            data.subscription;
        }
    }, []);

    return (
        //Provider enriquece a los hijos, se comparte el provider en este caso user
        <AuthContext.Provider value={{user}}> {children} </AuthContext.Provider>
    )
};
//Si quiero consumir sera atravez de UserAuth
export const UserAuth = () => {
    return useContext(AuthContext)
}
//Contexto global por lo cual sera el único

import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.config";
import { MostrarUsuarios, InsertarEmpresa, InsertarAdmin, MostrarTiposDocumentos, MostrarRolesPorNombre } from "../index";

//AuthContext empieza vacio
const AuthContext = createContext();

//Utilizamos hoock nativo de React
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
            if (session?.user == null) {
                setUser(null)
            } else {
                //.user porque contiene todos los datos que me interesa
                setUser(session?.user);
                // console.log("session", session.user.id);
                insertarDatos(session?.user.id, session?.user.email);
            }
            // console.log(event);
        });
        return () => {
            //siempre escuchara al bak-end si el usuario se ha logeado o cerro sesión y si el tolen expiro de google
            data.subscription;
        }
    }, []);

    const insertarDatos = async (id_auth, correo) => {
        const response = await MostrarUsuarios({ id_auth: id_auth });

        if (response) {
            return;    
        } else {
            const responseEmpresa = await InsertarEmpresa({id_auth: id_auth});
            const responseTipoDocumento = await MostrarTiposDocumentos({id_empresa:responseEmpresa?.id});
            //console.log(responseTipoDocumento);
            const responseRol = await MostrarRolesPorNombre({nombre:"superadmin"});
            const pUser = {
                id_tipodocumento: responseTipoDocumento[0]?.id,
                id_rol: responseRol?.id,
                correo: correo,
                fecharegistro: new Date(),
                id_auth: id_auth
            }
            await InsertarAdmin(pUser);
        }
    };

    return (
        //Provider enriquece a los hijos, se comparte el provider en este caso user
        <AuthContext.Provider value={{ user }}> {children} </AuthContext.Provider>
    )
};
//Si quiero consumir sera atravez de UserAuth
export const UserAuth = () => {
    return useContext(AuthContext)
}
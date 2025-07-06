import { Routes, Route } from "react-router-dom";
import { Categorias, Configuraciones, Home, Login, Productos, ProtectedRoute, Spinner1, useEmpresaStore, UserAuth, useUsuariosStore } from "../index"
import { useQuery } from "@tanstack/react-query";
export function MyRoutes() {
    const { user } = UserAuth()
    //Con datausuarios ya tenemos un id de usuario que mandar al rpc que solicitaba un id usuario
    const {datausuarios, mostrarusuarios} = useUsuariosStore();
    const {mostrarempresa, dataempresa} = useEmpresaStore();
    const {isLoading, error} = useQuery({queryKey:"mostrar usuarios", queryFn: mostrarusuarios, refetchOnWindowFocus: false});
    const {data:dtempresa} = useQuery({queryKey: ["mostrar empresa", datausuarios?.id], queryFn: () => mostrarempresa({_id_usuario:datausuarios?.id}), enabled:!!datausuarios, refetchOnWindowFocus: false})

    if (isLoading) {
        return (<Spinner1/>)
    }
    if (error) {
        return (<span>error...</span>)
    }

    return (
        //En caso el usuario este logeado se dirige al home "/" caso contrario protegemos la ruta del home y se redirige al login
        //El login se queda desprotegido 
        <Routes>
            <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
                <Route path="/" element={<Home />} />
                <Route path="/configuracion" element={<Configuraciones />} />
                <Route path="/configuracion/categorias" element={<Categorias />} />
                <Route path="/configuracion/productos" element={<Productos />} />
            </Route>

            <Route path="/login" element={<Login />} />
        </Routes>

    )

}
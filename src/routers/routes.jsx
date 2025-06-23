import { Routes, Route } from "react-router-dom";
import { Home, Login, ProtectedRoute, UserAuth } from "../index"
export function MyRoutes() {
    const {user} = UserAuth()
    return (
        //En caso el usuario este logeado se dirige al home "/" caso contrario protegemos la ruta del home y se redirige al login
        //El login se queda desprotegido 
        <Routes>
            <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
                <Route path="/" element={<Home />} />
            </Route>
            
            <Route path="/login" element={<Login />} />
        </Routes>

    )

}
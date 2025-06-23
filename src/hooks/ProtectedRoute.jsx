import { Navigate, Outlet } from "react-router-dom"

//Este redirectTo redirije al login en caso de que un usuario no este logeado
export const ProtectedRoute = ({user, redirectTo, children}) => {
    //en caso de que el usuario no tenga inicio de sesion
    if(user== null) return <Navigate replace to={redirectTo}/>;
    //en caso de que no sea null devuelve los children
    // si contiene una rueda de carga o loader se usa Outlet
    //caso contrario se muestra los children
    //Con el Outlet esperamos a que cargue toda la página y la mostramos
    return children?children:<Outlet/>;
}
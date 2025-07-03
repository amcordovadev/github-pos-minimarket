import { useQuery } from "@tanstack/react-query";
import {ConfiguracionesTemplate, Spinner1, useModulosStore} from "../index";

export function Configuraciones() {
  const {mostrarModulos} = useModulosStore()
  //Aqui se consulta
  const { isLoading, error } = useQuery({queryKey:"mostrar modulos", queryFn:mostrarModulos})

  if (isLoading) {
    return <Spinner1/>;
  }
  if (error) {
    return (<span>error...</span>);
  }
  //Si todo esta bien retornamos todo lo que contiene esa ruta
  //Aqui se consume
  return (<ConfiguracionesTemplate/>);
}
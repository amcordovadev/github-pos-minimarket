import { useQuery } from "@tanstack/react-query";
import { ProductosTemplate, Spinner1, useCategoriasStore, useEmpresaStore, useProductosStore, useSucursalesStore } from "../index"
export function Productos() {
  const {mostrarCategorias} = useCategoriasStore();
  const { mostrarSucursales } = useSucursalesStore();
  const { mostrarProductos, buscarProductos, buscador } = useProductosStore();
  const { dataempresa } = useEmpresaStore();
  const { isLoading, error } = useQuery({ queryKey: ["mostrar productos", dataempresa?.id], queryFn: () => mostrarProductos({ id_empresa: dataempresa?.id }), enabled: !!dataempresa, refetchOnWindowFocus: false });

  //buscar productos
  const { } = useQuery({ queryKey: ["buscar productos", buscador], queryFn: () => buscarProductos({ id_empresa: dataempresa?.id, marca: buscador }), enabled: !!dataempresa, refetchOnWindowFocus: false });

  //mostrar sucursales
  useQuery({ queryKey: ["mostrar sucursales", dataempresa?.id], queryFn: () => mostrarSucursales({ id_empresa: dataempresa?.id }), enabled: !!dataempresa, refetchOnWindowFocus: false });

  //mostrar categorias
  useQuery({ queryKey: ["mostrar categorias", dataempresa?.id], queryFn: () => mostrarCategorias({ id_empresa: dataempresa?.id }), enabled: !!dataempresa, refetchOnWindowFocus: false });

  if (isLoading) {
    return (<Spinner1 />)
  }
  if (error) {
    return (<span>error...</span>)
  }
  return (<ProductosTemplate />);
}
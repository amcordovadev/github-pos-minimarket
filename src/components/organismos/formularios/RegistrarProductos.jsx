import styled from "styled-components";
import { v } from "../../../styles/variables";
import {
  InputText,
  Btn1,
  ConvertirCapitalize,
  Spinner2,
  useProductosStore,
  Switch1,
  Selector,
  useSucursalesStore,
  ListaDesplegable,
  useCategoriasStore,
} from "../../../index";
import { useForm } from "react-hook-form";
import { useEmpresaStore } from "../../../store/EmpresaStore";
import { useMutation } from "@tanstack/react-query";
import { Device } from "../../../styles/BreakPoints"
import { ContainerSelector } from "../../atomos/ContainerSelector";
import { useState } from "react";
import { Checkbox1 } from "../Checkbox1";

export function RegistrarProductos({
  onClose,
  dataSelect,
  accion,
  setIsExploding,
}) {
  //Validar checkbox
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);
  const handleCheckboxChange = (checkboxNumber) => {
    if (checkboxNumber === 1) {
      setIsChecked1(true)
      setIsChecked2(false)
    } else {
      setIsChecked1(false)
      setIsChecked2(true)
    }
  }

  const { insertarProductos, editarProductos } = useProductosStore();
  const { dataempresa } = useEmpresaStore();
  const [stateInventarios, setStateInventarios] = useState(false);
  const [stateListaSucursales, setStateListaSucursales] = useState(false);
  const [stateListaCategorias, setStateListaCategorias] = useState(false);
  const { sucursalesItemSelect, dataSucursales, selectSucursal } = useSucursalesStore();
  const { datacategorias, selectCategoria, categoriaItemSelect } = useCategoriasStore()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { isPending, mutate: doInsertar } = useMutation({
    mutationFn: insertar,
    mutationKey: "insertar marca",
    onError: (err) => console.log("El error", err.message),
    onSuccess: () => cerrarFormulario(),
  });
  const handlesub = (data) => {
    doInsertar(data);
  };
  const cerrarFormulario = () => {
    onClose();
    setIsExploding(true);
  };
  async function insertar(data) {
    if (accion === "Editar") {
      const p = {
        _nombre: ConvertirCapitalize(data.marca),
        _id_empresa: dataempresa.id,
        _id: dataSelect.id,
      };
      await editarProductos(p);
    } else {
      const p = {
        _nombre: ConvertirCapitalize(data.marca),
        _id_empresa: dataempresa.id,
      };

      await insertarProductos(p);
    }
  }
  return (
    <Container>
      {isPending ? (
        <Spinner2 />
      ) : (
        <div className="sub-contenedor">
          <div className="headers">
            <section>
              <h1>
                {accion == "Editar"
                  ? "Editar producto"
                  : "Registrar nuevo producto"}
              </h1>
            </section>

            <section>
              <span onClick={onClose}>x</span>
            </section>
          </div>
          <form className="formulario" onSubmit={handleSubmit(handlesub)}>


            <section className="seccion1">
              <article>
                <InputText icono={<v.iconoflechaderecha />}>
                  <input
                    className="form__field"
                    defaultValue={dataSelect.nombre}
                    type="text"
                    placeholder="nombre"
                    {...register("nombre", {
                      required: true,
                    })}
                  />
                  <label className="form__label">producto</label>
                  {errors.descripcion?.type === "required" && (
                    <p>Campo requerido</p>
                  )}
                </InputText>
              </article>

              <article>
                <InputText icono={<v.iconoflechaderecha />}>
                  <input
                    className="form__field"
                    defaultValue={dataSelect.nombre}
                    step="0.01"
                    type="number"
                    placeholder="precio venta"
                    {...register("precio_venta", {
                      required: true,
                    })}
                  />
                  <label className="form__label">precio venta</label>
                  {errors.precio_venta?.type === "required" && (
                    <p>Campo requerido</p>
                  )}
                </InputText>
              </article>

              <article>
                <InputText icono={<v.iconoflechaderecha />}>
                  <input
                    className="form__field"
                    defaultValue={dataSelect.nombre}
                    step="0.01"
                    type="number"
                    placeholder="precio compra"
                    {...register("precio_compra", {
                      required: true,
                    })}
                  />
                  <label className="form__label">precio compra</label>
                  {errors.precio_compra?.type === "required" && (
                    <p>Campo requerido</p>
                  )}
                </InputText>
              </article>

              <article>
                <InputText icono={<v.iconoflechaderecha />}>
                  <input
                    className="form__field"
                    defaultValue={dataSelect.nombre}
                    step="1"
                    type="text"
                    placeholder="codigo de barras"
                    {...register("codigo_barras", {
                      required: true,
                    })}
                  />
                  <label className="form__label">codigo de barras</label>
                  {errors.codigo_barras?.type === "required" && (
                    <p>Campo requerido</p>
                  )}
                </InputText>
              </article>

              <article>
                <InputText icono={<v.iconoflechaderecha />}>
                  <input
                    className="form__field"
                    defaultValue={dataSelect.nombre}
                    step="1"
                    type="text"
                    placeholder="codigo interno"
                    {...register("codigo_interno", {
                      required: true,
                    })}
                  />
                  <label className="form__label">codigo interno</label>
                  {errors.codigo_interno?.type === "required" && (
                    <p>Campo requerido</p>
                  )}
                </InputText>
              </article>
            </section>

            <section className="seccion2">
              <label>Se vende por: </label>

              <ContainerSelector>
                <label>UNIDAD </label>
                <Checkbox1 isChecked={isChecked1} onChange={() => handleCheckboxChange(1)}/>

                <label>GRANEL(decimales) </label>
                <Checkbox1 isChecked={isChecked2} onChange={() => handleCheckboxChange(2)}/>
              </ContainerSelector>

              <ContainerSelector>

                <label>Categoria: </label>

                <Selector state={stateListaCategorias}
                  funcion={() => setStateListaCategorias(!stateListaCategorias)}
                  texto1={"🏪"} texto2={categoriaItemSelect?.nombre}
                  color={"#FC6027"} />

                <ListaDesplegable onChange={selectCategoria}
                  data={datacategorias}
                  top={"4rem"}
                  setState={() => setStateListaCategorias(!stateListaCategorias)}
                  state={stateListaCategorias} />

              </ContainerSelector>

              <ContainerSelector>

                <label>Controlar stock: </label>

                <Switch1 state={stateInventarios} setState={() => setStateInventarios(!stateInventarios)} />


              </ContainerSelector>
              {
                stateInventarios && (
                  <ContainerStock>
                    <ContainerSelector>
                      <label>Sucursal: </label>
                      <Selector state={stateListaSucursales} funcion={() => setStateListaSucursales(!stateListaSucursales)} texto1={"🏪"} texto2={sucursalesItemSelect?.nombre} color={"#FC6027"} />
                      <ListaDesplegable onChange={selectSucursal} data={dataSucursales} top={"4rem"} setState={() => setStateListaSucursales(!stateListaSucursales)} state={stateListaSucursales} />

                    </ContainerSelector>

                    <article>
                      <InputText icono={<v.iconoflechaderecha />}>
                        <input
                          className="form__field"
                          defaultValue={dataSelect.nombre}
                          step="0.01"
                          type="number"
                          placeholder="stock"
                          {...register("stock", {
                            required: true,
                          })}
                        />
                        <label className="form__label">stock</label>
                        {errors.stock?.type === "required" && (
                          <p>Campo requerido</p>
                        )}
                      </InputText>
                    </article>

                    <article>
                      <InputText icono={<v.iconoflechaderecha />}>
                        <input
                          className="form__field"
                          defaultValue={dataSelect.nombre}
                          step="0.01"
                          type="number"
                          placeholder="stock minimo"
                          {...register("stock_minimo", {
                            required: true,
                          })}
                        />
                        <label className="form__label">stock minimo</label>
                        {errors.stock_minimo?.type === "required" && (
                          <p>Campo requerido</p>
                        )}
                      </InputText>
                    </article>

                  </ContainerStock>)
              }


            </section>

            <Btn1
              icono={<v.iconoguardar />}
              titulo="Guardar"
              bgcolor="#F9D70B"
            />
          </form>
        </div>
      )}
    </Container>
  );
}
const Container = styled.div`
  transition: 0.5s;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(10, 9, 9, 0.5);
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .sub-contenedor {
    position: relative;
    width: 100%;
    max-width: 90%;
    border-radius: 20px;
    background: ${({ theme }) => theme.bgtotal};
    box-shadow: -10px 15px 30px rgba(10, 9, 9, 0.4);
    padding: 13px 36px 20px 36px;
    z-index: 100;

    .headers {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      h1 {
        font-size: 20px;
        font-weight: 500;
      }
      span {
        font-size: 20px;
        cursor: pointer;
      }
    }
    .formulario {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      @media ${Device.tablet} {
        grid-template-columns: repeat(2, 1fr);
      }
      section{
        gap: 20px;
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

const ContainerStock = styled.div`
  border: 1px solid rgba(240, 104, 46, 0.9);
  display: flex;
  border-radius: 15px;
  padding: 12px;
  flex-direction: column;
  background-color: rgba(240, 127, 46, 0.05);
`;

const ContentTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;

  svg {
    font-size: 25px;
  }
  input {
    border: none;
    outline: none;
    background: transparent;
    padding: 2px;
    width: 40px;
    font-size: 28px;
  }
`;
const PictureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  border: 2px dashed #f9d70b;
  border-radius: 5px;
  background-color: rgba(249, 215, 11, 0.1);
  padding: 8px;
  position: relative;
  gap: 3px;
  margin-bottom: 8px;

  .ContentImage {
    overflow: hidden;
    img {
      width: 100%;
      object-fit: contain;
    }
  }
  input {
    display: none;
  }
`;
import styled from "styled-components";
import { Btn1, Buscador, RegistrarCategorias, RegistrarProductos, TablaCategorias, TablaProductos, Title, useCategoriasStore, useProductosStore } from "../../index";
import { v } from "../../styles/variables";
import { useState } from "react";
import ConfettiExplosion from 'react-confetti-explosion';

export function ProductosTemplate() {
  const [openRegistro, SetopenRegistro] = useState(false);
  const { dataProductos, setBuscador } = useProductosStore()
  const [accion, setAccion] = useState("");
  const [dataSelect, setdataSelect] = useState([]);
  const [isExploding, setIsExploding] = useState(false);
  function nuevoRegistro() {
    SetopenRegistro(!openRegistro)
    setAccion("Nuevo")
    setdataSelect([])
    setIsExploding(false)
  }

  return (<Container>

    {
      openRegistro && (<RegistrarProductos setIsExploding={setIsExploding} onClose={() => SetopenRegistro(!openRegistro)} dataSelect={dataSelect} accion={accion} />)
    }

    <section className="area1">
      <Title>Productos</Title>
      <Btn1 funcion={nuevoRegistro} bgcolor={v.colorPrincipal} titulo={"Nuevo"} icono={<v.iconoagregar />} />
    </section>

    <section className="area2">
      <Buscador  setBuscador={setBuscador}/>
    </section>

    <section className="main">
      <ConfettiWrapper> {isExploding && <ConfettiExplosion force={0.8} duration={3000} particleCount={250} width={1600} />} </ConfettiWrapper>
      <TablaProductos setdataSelect={setdataSelect} setAccion={setAccion} SetopenRegistro={SetopenRegistro} data={dataProductos} />
    </section>
  </Container>);
}
const Container = styled.div`
  height: calc(100vh - 30px);
  padding: 15px;
  display: grid;
  grid-template: 
  "area1" 60px
  "area2" 60px
  "main" auto;

  .area1{
    grid-area: area1;
    /* background-color: rgba(103,93,241,0.14); */
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 15px;
  }

  .area2{
    grid-area: area2;
    /* background-color: rgba(93, 241, 128, 0.14); */
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .main{
    grid-area: main;
    /* background-color: rgba(237,7,221,0.14); */
    position: relative;
    overflow: hidden;
  }
`

const ConfettiWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  pointer-events: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
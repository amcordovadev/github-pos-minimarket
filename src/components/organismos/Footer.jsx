import styled from "styled-components";
import { GiPadlock } from "react-icons/gi";
export function Footer() {
    return (
        <Container>
            <section className="lock">
                <GiPadlock />
                <span>
                    Esta es una página segura de **Minimarket La Paradita**.
                    <br />
                    Si tienes dudas sobre la autenticidad del sitio, por favor, contáctanos:
                    <br />
                    <span>000-000</span> o a través de nuestros medios digitales.
                </span>
            </section>
            <section className="derechos">
                <span>La Paradita - RUC: 20100047218</span>
                <div className="separador"></div>
                <span>Todos los derechos reservados</span>
                <div className="separador"></div>
                <span>© 2025 Minimarket La Paradita</span>
            </section>
        </Container>
    );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12.2px;
  color: #91a4b7;
  gap:5px;
  padding: 15px;
  .lock {
    border-bottom: 1px solid rgba(145, 164, 183,0.3);
    gap:5px;
    display:flex;
    align-items:center;
    text-align: center;
    justify-content: center;
    padding-bottom: 10px;
  }
  .lock span{
    flex-grow: 1;
  }
  .derechos {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 10px;
    
   .separador{
    width:1px;
    background-color:rgba(145, 164, 183,0.3);
    height: 15px;
    margin: auto 0;
   }
    span{
      margin-top:5px;
      white-space: nowrap;
    }
  }
`;
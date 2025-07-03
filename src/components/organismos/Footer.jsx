import styled from "styled-components";
import { GiPadlock } from "react-icons/gi";
import {FaInstagram} from "react-icons/fa";

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
                    <span>+56 976580991</span> o a través de nuestros medios digitales.
                    <SocialButtonsContainer>
                        <SocialButton href="https://www.instagram.com/minimarket.laparadita/" target="_blank" rel="Instagram">
                            {<FaInstagram />}
                        </SocialButton>
                    </SocialButtonsContainer>
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
    flex-direction: column;
    align-items:center;
    text-align: center;
    justify-content: center;
    padding-bottom: 10px;
  }
  .lock span{
    flex-grow: 1;
    margin-bottom: 10px;
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

const SocialButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
  justify-content: center;
`;

const SocialButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #555;
  color: white;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%);
  font-size: 18px;
  text-decoration: none;
  transition: background 0.3s ease, filter 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%);
    filter: brightness(1.15);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
  }
  
`;
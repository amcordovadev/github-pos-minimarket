import styled from "styled-components";
import { Btnsave, Footer, InputText2, Linea, Title, useAuthStore } from "../../index";
import { v } from "../../styles/variables";
import { Device } from "../../styles/BreakPoints"
export function LoginTemplate() {
    const { loginGoogle } = useAuthStore()
    return (
        <Container>
            <div className="card">
                <ContentLogo>
                    <img src={v.logo} alt="Logo Minimarket" />
                    <span>Minimarket La Paradita 1.0</span>
                </ContentLogo>
                <Title $paddingbottom="30px">Ingresar</Title>
                <form action="">
                    <InputText2>
                        <input className="form__field" placeholder="email" type="text" />
                    </InputText2>

                    <InputText2>
                        <input className="form__field" placeholder="contraseña" type="password" />
                    </InputText2>

                    <Btnsave titulo={"Ingresar"} bgcolor={"#1cf6b8"} color={"255,255,255"} width={"100%"} />
                </form>
                <Linea>
                    <span>O</span>
                </Linea>
                <Btnsave funcion={loginGoogle} titulo={"Google"} bgcolor={"#fff"} icono={<v.iconogoogle />} />
            </div>
            <Footer />
        </Container>);
}
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 0 15px;
  color: ${({ theme }) => theme.text};

    .card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 100%;
        margin: 30px;
        @media ${Device.tablet} {
            width: 400px;
        }
    }
  
`
//Agregar logo al login
const ContentLogo = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    gap: 5px;
    span{
        font-weight: 700;
    }
    img{
        width: 10%;
    }
`
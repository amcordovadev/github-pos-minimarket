import styled from "styled-components";
import { useAuthStore } from "../../store/AuthStore"
import { UserAuth } from "../../context/AuthContent";
export function HomeTemplate() {
  const { cerrarSesion } = useAuthStore();
  //Como ya se tiene información del usuario rescatamos los datos que necesitamos
  const { user } = UserAuth();
  return (
    <Container>
      <span>Home Template</span>
      <button onClick={cerrarSesion}>Cerrar</button>
    </Container>);
}
const Container = styled.div`
  height: 100vh;
`
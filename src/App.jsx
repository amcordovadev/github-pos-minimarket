import styled, { ThemeProvider } from "styled-components"
import { AuthContextProvider, GlobalStyles, MyRoutes, Sidebar, useThemeStore, Login } from "./index"
import { Device } from "./styles/BreakPoints"
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { themeStyle } = useThemeStore();
  const {pathname} = useLocation();
  return (
    //El AuthContextProvider escuchara todo lo que se realice en los childrens
    //con el pathname ubicaremos en que ruta nos posicionamos y si estamos en el login que nos muestre unicamente el login
    //evitamos mostrar los demás elementos
    <ThemeProvider theme={themeStyle}>
      <AuthContextProvider> 
        <GlobalStyles />
        {pathname != "/login"?(<Container className={sidebarOpen ? "active" : ""}>
          
          <section className="contentSidebar"><Sidebar state={sidebarOpen} setState={() => setSidebarOpen(!sidebarOpen)} /></section>
          <section className="contentMenuDropdown">menu dropdown</section>
          <section className="contentRouters"><MyRoutes /></section>

        </Container>):(<Login/>)}

        <ReactQueryDevtools initialIsOpen={true} />
        
      </AuthContextProvider>

    </ThemeProvider>

  )
}
const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  transition: 0.1s ease-in-out;
  color: ${({ theme }) => theme.text};

  .contentSidebar{
    display: none;
    /* background-color: rgba(78,45,78,0.5); */
  }
  .contentMenuDropdown{
    position: absolute;
    /* background-color: rgba(13,241,215,0.5); */
  }
  .contentRouters{
    /* background-color: rgba(231,13,136,0.5); */
    grid-column: 1;
    width: 100%;
  }
  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr;
    &.active{
      grid-template-columns: 260px 1fr;
    }
    .contentSidebar{
      display:initial;
    }
    .contentMenuDropdown{
      display: none;
    }
    .contentRouters{
      grid-column: 2;
    }
  }
`;
export default App

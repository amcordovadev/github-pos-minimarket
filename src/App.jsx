import styled, { ThemeProvider } from "styled-components"
import { GlobalStyles, MyRoutes, Sidebar, useThemeStore } from "./index"
import { Device } from "./styles/BreakPoints"
import { useState } from "react";
function App() {
  const [ sidebarOpen, setSidebarOpen ] = useState(false);
  const { themeStyle } = useThemeStore();
  return (
    <ThemeProvider theme={themeStyle}>
      <Container className={sidebarOpen?"active":""}>
        <GlobalStyles />
        <section className="contentSidebar"><Sidebar state={sidebarOpen} setState={() => setSidebarOpen(!sidebarOpen)} /></section>
        <section className="contentMenuDropdown">menu dropdown</section>
        <section className="contentRouters"><MyRoutes /></section>

      </Container>
    </ThemeProvider>

  )
}
const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  transition: 0.1s ease-in-out;
  color: ${({theme}) => theme.text};

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

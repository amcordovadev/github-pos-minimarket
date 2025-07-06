import styled from "styled-components";
import {BeatLoader} from "react-spinners"

export function Spinner2() {
  return (<Container>
    <BeatLoader color="#7f3ceb" size={100}/>
  </Container>);
}
const Container =styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
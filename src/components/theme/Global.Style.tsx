import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

 body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background: linear-gradient(to bottom, #F5FFFB 0%, #FFFFFF 100%);
    /* Adicione outros estilos globais conforme necessário */
  }
`;

export default GlobalStyle;

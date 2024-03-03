import { createGlobalStyle } from "styled-components";

// Cria um estilo global usando createGlobalStyle do styled-components
const GlobalStyle = createGlobalStyle`
  /* Define estilos globais para todos os elementos */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Define a caixa de modelagem como border-box para incluir bordas e preenchimentos no cálculo do tamanho */
    font-family: 'Nunito', sans-serif; /* Define a fonte padrão para todos os elementos, com fallback para sans-serif */
  }

  /* Define estilos específicos para o corpo da página */
  body {
    margin: 0; /* Remove margens padrão do corpo */
    padding: 0; /* Remove preenchimentos padrão do corpo */
    font-family: Arial, sans-serif; /* Define a fonte padrão do corpo como Arial, com fallback para sans-serif */
    width: 100vw; /* Define a largura do corpo como 100% da largura da viewport */
    
    /* Adicione outros estilos globais conforme necessário */
  }
`;

export default GlobalStyle; // Exporta o estilo global para uso em outros componentes ou no aplicativo como um todo

// Header.Styles.js
import styled from "styled-components";

export const Header = styled.div`
  width: 1440px;
  background-color: #FAFFFD;
  width: 1440px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 162px;
`;

export const Nav = styled.nav`
  width: 437px;
  height: 48px;
  align-items: center;
  display: flex;

  button {
    margin-left: 16px;
    width: 174px;
    height: 48px;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    align-items: center;
    color: #018762;
    border: none;
    cursor: pointer;
    font-family: 'Nunito', sans-serif;
    border-radius: 8px; /* Arredondamento em todos os botões */
    transition: background-color 0.3s ease;
    background-color: transparent;
  }

  button:nth-child(-n+2):hover { /* Estilos de hover específicos para os dois primeiros botões */
    background-color: #E6F3EF; /* Cor de fundo verde claro em hover */
  }

  .enterButton { /* Estilos específicos apenas para o botão "Entrar" */
    background-color: #018762; /* Cor de fundo verde */
    color: white; /* Cor do texto branco */
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
  }

  .enterButton:hover { /* Estilos de hover específicos para o botão "Entrar" */
    background-color: #016644; /* Cor de fundo verde mais escura em hover */
    color: white; /* Cor do texto branco em hover */
  }
`;

export const Img = styled.img`
  width: 202px;
  height: 24px;
  cursor: pointer;
`;

import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  background-color: linear-gradient(180deg, #F5FFFB 0%, #FFFFFF 100%);
;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 138px;

  @media (max-width: 770px) {
    padding: 24px 20px;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: 955px) {
    padding: 24px 162px;
  }
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
    font-family: "Nunito", sans-serif;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    background-color: transparent;
  }

  button:nth-child(-n + 2):hover {
    background-color: #e6f3ef;
  }

  .enterButton {
    background-color: #018762;
    color: white;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
  }

  .enterButton:hover {
    background-color: #016644;
    color: white;
  }

  @media (max-width: 770px) {
    display: none;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    margin-top: 40px;
    padding: 40px;
    background-color: #fff;
    height: 400px;

    button {
      margin: 10px 0;
      width: 100%;
    }
  }

  &.open {
    display: flex;
  }

  @media (max-width: 955px) {
    button {
      font-size: 16px;
      
    }
  }
`;

export const Img = styled.img`
  width: 202px;
  height: 24px;
  cursor: pointer;

  @media (max-width: 955px) {
    width: 150px;
    height: auto;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  position: fixed;
  top: 24px;
  right: 20px;

  div {
    width: 35px;
    height: 5px;
    background-color: #018762;
    margin: 3px 0;
  }

  @media (max-width: 770px) {
    display: flex;
    z-index: 10;
  }
`;
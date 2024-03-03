import React, { useState } from "react";
import * as C from "./Header.Styles";
import logo from "../../assets/images/logo.png";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <C.Header data-testid="header">
      <C.Img src={logo} alt="Logo Lacrei Saúde" />
      <C.Nav data-testid="nav" className={menuOpen ? "open" : ""}>
        <button type="button">Quem Somos</button>
        <button type="button">Ajuda</button>
        <button type="button" className="enterButton">Entrar</button>
      </C.Nav>
      <C.HamburgerMenu data-testid="hamburger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </C.HamburgerMenu>
    </C.Header>
  );
};

export default Header;

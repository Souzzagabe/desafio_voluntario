import { useState } from "react";
import * as C from "./Header.Styles";
import logo from "../../assets/images/logo.png"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <C.Header>
      <C.Img src={logo} alt="Logo Lacrei Saúde" />
      <C.Nav className={menuOpen ? "open" : ""}>
        <button type="button">Quem Somos</button>
        <button type="button">Ajuda</button>
        <button type="button" className="enterButton">Entrar</button>
      </C.Nav>
      <C.HamburgerMenu onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </C.HamburgerMenu>
    </C.Header>
  );
};

export default Header;

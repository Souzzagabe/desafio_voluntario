import * as C from "./Header.Styles";
import logo from "../../assets/images/logo.png"; 

const Header = () => {
  return (
    <C.Header>
      <C.Img src={logo} alt="Logo Lacrei Saúde" />{" "}
      <C.Nav>
        <button type="button">Quem Somos</button>
        <button type="button">Ajuda</button>
        <button type="button" className="enterButton">Entrar</button>
      </C.Nav>
    </C.Header>
  );
};

export default Header;

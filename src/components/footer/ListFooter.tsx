import * as C from "./ListFooter.Styles";
import footerImg from "../../assets/images/footerImg.png";
import facebook from "../../assets/images/facebook.png"; 
import linkedin from "../../assets/images/linkedin.png"; 
import msg from "../../assets/images/msg.png"; 
import instagram from "../../assets/images/instagram.png"; 

const ListFooter = () => {
  return (
    <C.Content>
    <C.Social>
      <C.Img src={footerImg} alt="" />
      <ul>
      <li>
          <a href="#"><img src={facebook} alt="Facebook" /></a>
        </li>
        <li>
          <a href="#"><img src={instagram} alt="Instagram" /></a>
        </li>
        <li>
          <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
        </li>
        <li>
          <a href="#"><img src={msg} alt="Mensagem" /></a>
        </li>
      </ul>
    </C.Social>
    <C.Links>
      <C.Section>
        <C.SectionTitle>Lacrei Saúde</C.SectionTitle>
        <ul>
          <li>
            <a href="#">Quem Somos</a>
          </li>
          <li>
            <a href="#">Nosso Propósito</a>
          </li>
          <li>
            <a href="#">Missão, Visão e Valor</a>
          </li>
          <li>
            <a href="#">Acessibilidade</a>
          </li>
        </ul>
      </C.Section>
      <C.Section>
        <C.SectionTitle>Saúde</C.SectionTitle>
        <ul>
          <li>
            <a href="#">Buscar Atendimento</a>
          </li>
          <li>
            <a href="#">Oferecer Atendimento</a>
          </li>
        </ul>
      </C.Section>
      <C.Section>
        <C.SectionTitle>Segurança e Privacidade</C.SectionTitle>
        <ul>
          <li>
            <a href="#">Política de Privacidade</a>
          </li>
          <li>
            <a href="#">Termos de Uso</a>
          </li>
          <li>
            <a href="#">Direitos do Titular</a>
          </li>
        </ul>
      </C.Section>
    </C.Links>
  </C.Content>
  )
}

export default ListFooter
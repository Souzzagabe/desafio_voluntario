import * as C from "./InfoFooter.Styles";
import btnScroll from "../../../assets/images/btnscroll.png";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const InfoFooter = () => {
  return (
    <C.Infos>
      <C.InfosText>
        <p>
          A Lacrei não oferece tratamento médico emergencial. Em caso de
          emergência procure o hospital mais próximo.{" "}
        </p>
        <p>
          Em caso de problemas psicológicos, ligue para 188 (CVV) ou acesse o
          site www.cvv.org.br
        </p>
        <p>
          Copyright © 2021 Lacrei. Todos os direitos reservados. CNPJ:
          51.265.351/0001-65
        </p>
      </C.InfosText>
      <C.ButtonScroll type="button" onClick={scrollToTop}>
        <img src={btnScroll} alt="Botão de rolagem" />
      </C.ButtonScroll>
    </C.Infos>
  );
};

export default InfoFooter;

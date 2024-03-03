import * as C from "./Main.Styles";
import imgMain from "../../assets/images/imgMain.jpg"; 


const Main = () => {
  return (
    <C.Main>
      <C.Content>
        <C.Text>
          <h1>Junte-se à nossa comunidade</h1>
          <C.Separator />
          <p>
            Encontre atendimento clínico de qualidade ou entre para o time de
            profissionais da Lacrei Saúde.{" "}
          </p>
          <C.ButtonMain>
            <button>Buscar atendimento</button>
            <button>Oferecer atendimento</button>
          </C.ButtonMain>
        </C.Text>

        <C.Img src={imgMain} alt="Imagem de uma médica e uma enfermeira">
            
        </C.Img>
      </C.Content>
    </C.Main>
  );
};

export default Main;

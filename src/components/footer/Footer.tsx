import * as C from "./Footer.Styles";
import ListFooter from "./ListFooter";
import InfoFooter from "./infos/InfoFooter";

const Footer = () => {
  return (
    <C.Footer>
     <ListFooter/>
     <InfoFooter/>
    </C.Footer>
  );
};

export default Footer;

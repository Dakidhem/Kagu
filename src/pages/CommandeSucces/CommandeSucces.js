import React from "react";
import {
  Wrapper,
  Container,
  ImgSuccess,
  SuccesP,
  ImgContainer,
} from "./CommandeSuccesElements.js";
import Approval from "../../assets/Images/Approval.png";
import PackageSucces from "../../assets/Images/PackageSucces.png";

const CommandeSucces = () => {
  return (
    <Wrapper>
      <Container>
        <ImgSuccess src={Approval} />

        <SuccesP>
          Votre commande a été envoyée avec succès, elle sera pris en charge
          dans les plus bref délai.
        </SuccesP>
      </Container>
    </Wrapper>
  );
};

export default CommandeSucces;

import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {

  return (
    <ContainerPostagem>
      <TitleHeader>{props.dadosPostagem.titulo}</TitleHeader>
      {/* <Image src="https://media-exp1.licdn.com/dms/image/C4D03AQEQbokI3ewkxw/profile-displayphoto-shrink_200_200/0/1660564736509?e=1669852800&v=beta&t=dK4sGwS_gq5pfZY40c2Zi1pz5N9Mt9emAAEjtDgpc3U"/> */}
      <Image src={props.dadosPostagem.imagem} />
      <Description>{props.dadosPostagem.descricao}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;

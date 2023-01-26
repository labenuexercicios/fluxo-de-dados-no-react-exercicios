import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {

  return (
    <ContainerPostagem>
      <TitleHeader>{props.dados.titulo}</TitleHeader>
      <Image src={props.dados.imagem/*"https://picsum.photos/536/354"*/} />
      <Description>{props.dados.descricao}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;

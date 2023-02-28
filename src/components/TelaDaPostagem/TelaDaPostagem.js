import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {
  const{newAtualizar}=props
  return (
    <ContainerPostagem>
      <TitleHeader>{newAtualizar.titulo}</TitleHeader>
      <Image src={newAtualizar.imagem} />
      <Description>{newAtualizar.descricao}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;

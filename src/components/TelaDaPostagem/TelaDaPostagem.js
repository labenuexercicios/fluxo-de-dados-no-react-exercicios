import React from "react";
import { ContainerPostagem, Title, Image, Description } from "./TelaDaPostagem.styled";

const TelaDaPostagem = () => {
  return (
    <ContainerPostagem>
      <Title>Titulo</Title>
      <Image src={"https://picsum.photos/536/354"} />
      <Description>Descrição</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;

import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = () => {

  return (
    <ContainerPostagem>
      <TitleHeader>Um titulo</TitleHeader>
      <Image src={"https://picsum.photos/536/354"} />
      <Description>Uma descrição</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;

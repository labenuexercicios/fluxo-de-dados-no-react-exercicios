import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {

  return (
    <ContainerPostagem>
      <TitleHeader>{props.title}</TitleHeader>
      <Image src={props.post} />
      <Description>{props.describe}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;

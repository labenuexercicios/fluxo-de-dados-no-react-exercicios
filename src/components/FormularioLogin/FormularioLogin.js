import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {
  const login = () => {
    props.setPageFlow(2);
  };

  function nomeInput(event) {
    props.setNome(event.target.value)
  }

  function fotodePefilinput(event) {
    props.setImagemdeperfil(event.target.value)
  }

  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} onChange = {nomeInput} value={props.nome} placeholder="Digite seu nome"/>
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input type={"text"} onChange = {fotodePefilinput} value = {props.imagemdeperfil} placeholder="Coloque a url da foto" />
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;

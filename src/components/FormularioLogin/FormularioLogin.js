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
    const obj ={nome:props.nome,foto:props.fotoPerfil}
    props.setDadosLogin(obj)
  };


  function handleNome(event) {
    props.setNome(event.target.value)
  }

  function handleFotoPerfil(event) {
    props.setFotoPerfil(event.target.value)
  }

  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} value={props.nome} onChange={handleNome}/>
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input type={"text"} value={props.fotoPerfil} onChange={handleFotoPerfil}/>
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;

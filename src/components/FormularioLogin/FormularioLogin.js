import React, {useState} from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {
  const login = () => {
    const globalObjetc = {
      nome: props.nome,
      foto: props.fotoPerfil
    }
    props.setDados(globalObjetc)
    props.setPageFlow(2);
  }

  function onChangeNome(event) {
    props.setNome(event.target.value);
  }

  function onChangeFotoPerfil(event) {
    props.setFotoPerfil(event.target.value);
  }


  
  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} onChange={onChangeNome} value={props.nome} /> {/* */}
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input type={"text"} onChange={onChangeFotoPerfil} value={props.fotoPerfil}/> {/**/}
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;

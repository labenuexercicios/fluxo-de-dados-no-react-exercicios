import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {
  console.log(props)
  const login = (e) => {
    props.dados = {
      nome: props.nome,
      foto: props.foto,
    }
    props.setPageFlow(2);
    const objeto = {
      nome: props.nome,
      foto: props.foto,
    }
    props.setObject(objeto)
  }
  function onChangeNome(e){
    props.setNome(e.target.value);
  }
  function onChangeFoto(e){
    props.setFoto(e.target.value);
  }
  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} onChange={onChangeNome} value={props.nome} />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input type={"text"} onChange={onChangeFoto} value={props.foto}/>
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;

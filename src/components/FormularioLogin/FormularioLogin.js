import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {

const onChangeNome = (event)=>{
  props.setNome(event.target.value)
}
const onChangeFoto=(event)=>{
  props.setFoto(event.target.value)

}

  const login = () => {
    props.setPageFlow(2);
  };
  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} value={props.nome} onChange={onChangeNome} />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input type={"text"} value={props.foto} onChange={onChangeFoto} />
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;

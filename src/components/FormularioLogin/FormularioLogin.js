import React, { useState } from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");
  console.log("FormLogin(props):", props);

  const onChangeNome = (event) => {
    setNome(event.target.value);
  };
  const onChangeFoto = (event) => {
    setFoto(event.target.value);
  };

  const login = () => {
    const novoLogin = {
      nome,
      foto,
    };
    props.setLogin(novoLogin);
    props.setPageFlow(2);
  };
    return (
      <FormContainer>
        <Form>
          <StyledLabel>
            Nome:
            <Input type={"text"} value={nome} onChange={onChangeNome}
            />
          </StyledLabel>
          <StyledLabel>
            Foto de Perfil
            <Input type={"text"} value={foto} onChange={onChangeFoto} />
          </StyledLabel>

          <SendButton onClick={login}>Fazer Login</SendButton>
        </Form>
      </FormContainer>
    );
  };

  export default FormularioLogin;

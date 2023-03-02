import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {
   const{login,inputName,setInputName,inputProFilePicture,setInputProFilePicture}=props
  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} value={inputName} onChange={(e)=>setInputName(e.target.value)}/>
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input type={"text"} value={inputProFilePicture} onChange={(e)=>setInputProFilePicture(e.target.value)}/>
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;

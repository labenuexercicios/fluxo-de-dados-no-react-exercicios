import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";
import React, { useState } from "react";

export const FormularioCadastro = (props) => {

  const [titulo, setTitulo] = useState("");
  const [imagem, setImagem] = useState("");
  const [descricao, setDescricao] = useState("");

  console.log("FormCadastro(props):", props);

  const onChangeTitulo = (event) => {
    setTitulo(event.target.value);
  };
  const onChangeImagem = (event) => {
    setImagem(event.target.value);
  };
  const onChangeDescricao = (event) => {
    setDescricao(event.target.value);
  };

  const enviarDados = () => {
    const novoCadastro = {
      titulo,
      imagem,
      descricao
    };
    console.log("cadastro", novoCadastro);
    props.setCadastro(novoCadastro);
    setTitulo("");
    setImagem("");
    setDescricao("");
  };

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2><br/>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" value={titulo} onChange={onChangeTitulo} />
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={imagem} onChange={onChangeImagem} />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao"
            value={descricao}
            onChange={onChangeDescricao}/>
        </StyledLabel>
        <SendButton onClick={enviarDados}>Enviar</SendButton>
        
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;

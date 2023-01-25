import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";
import { Header } from "../Header";

export const FormularioCadastro = (props) => {

  function tituloInputs (event) {
    props.setTitulo(event.target.value)
  }

  function imageInputs (event) {
    props.setImagem(event.target.value)
  }

  function descricaoInputs (event) {
    props.setDescricao(event.target.value)
  }
  
  function enviarItens () {
    props.setEnviapage(2)
  }

  function voltarPag1 () {
    props.setPageFlow(1)
    props.setEnviapage(1)
  }
  return (
    <FormContainer>
      <Header
      nome = {props.nome}
      imagemdeperfil = {props.imagemdeperfil}
      />
      <Form>
      <h2>Insira sua postagem abaixo: </h2>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" value={props.titulo} onChange = {tituloInputs} placeholder = "Digite seu titulo" />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={props.imagem} onChange = {imageInputs} placeholder = "Digite a url da imagem" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={props.descricao} onChange = {descricaoInputs} placeholder = "Digite seu titulo" />
        </StyledLabel>

        <button onClick={enviarItens} >Enviar</button>
        <button onClick={voltarPag1}>Sair</button>

      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;

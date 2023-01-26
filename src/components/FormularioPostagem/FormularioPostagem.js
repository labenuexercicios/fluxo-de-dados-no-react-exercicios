import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {

  function handleTitulo(event) {
    props.setTitulo(event.target.value)
  }

  function handleImagem(event) {
    props.setImagem(event.target.value)
  }

  function handleDescricao(event) {
    props.setDescricao(event.target.value)
  }

  function postar() {
    const obj = { titulo: props.titulo, imagem: props.imagem, descricao: props.descricao }
    props.setDadosPostagem(obj)
  }

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" value={props.titulo} onChange={handleTitulo} />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={props.imagem} onChange={handleImagem} />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={props.descricao} onChange={handleDescricao} />
        </StyledLabel>
        <SendButton onClick={postar}>Postar</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;

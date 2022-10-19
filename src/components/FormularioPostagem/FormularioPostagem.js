import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {

  function enviar(){
    const globalObjetcPostagem = {
      titulo: props.titulo,
      imagem: props.imagemPostagem, 
      descricao: props.descricao
    }
    props.setDadosPostagem(globalObjetcPostagem)
    props.setPageFlow(3);
  }

  function onChangeTitulo(event) {
    props.setTitulo(event.target.value);
  }

  function onChangeImagemPostagem(event) {
    props.setImagemPostagem(event.target.value);
  }

  function onChangeDescricao(event) {
    props.setDescricao(event.target.value);
  }



  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo" >
          Titulo:
          <Input id="titulo" onChange = {onChangeTitulo} value = {props.titulo}/>
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" type={"text"} onChange = {onChangeImagemPostagem} value = {props.imagemPostagem}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao"  onChange = {onChangeDescricao} value = {props.descricao}/>
        </StyledLabel>
        <SendButton onClick={enviar}>Enviar</SendButton>  {/*onClick={} */}
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;

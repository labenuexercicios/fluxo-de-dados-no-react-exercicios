import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {

  const onChangeTitulo =(e)=>{
    props.setTitulo(e.target.value)
  }
  const onChangeImagem =(e)=>{
    props.setImagem(e.target.value)
  }
  const onChangeDescricao =(e)=>{
    props.setDescricao(e.target.value)
  }

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" titulo={props.titulo}  onChange={onChangeTitulo}  />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" foto={props.imagem} onChange={onChangeImagem} />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao"  descricao={props.descricao}  onChange={onChangeDescricao}/>
        </StyledLabel>
        {/* <SendButton onClick={postagem}>Fazer Login</SendButton> */}
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;

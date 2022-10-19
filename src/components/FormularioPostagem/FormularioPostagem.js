import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {
  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" value={props.title} onChange={props.titleState}/>
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={props.post} onChange={props.postState}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={props.describe.describe} onChange={props.describeState}/>
        </StyledLabel>
      </Form>
      <SendButton onClick={props.publicar}>Publicar</SendButton>
    </FormContainer>
  );
};

export default FormularioCadastro;

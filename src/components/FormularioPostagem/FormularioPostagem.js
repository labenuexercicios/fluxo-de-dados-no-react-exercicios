import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {
  const{atualizar,inputTitulo,setInputTitulo,inputImagem,setInputImagem,inputDescricao,setInputDescricao}=props
  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" value={inputTitulo} onChange={(e)=>setInputTitulo(e.target.value)}/>
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={inputImagem} onChange={(e)=>setInputImagem(e.target.value)} />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={inputDescricao} onChange={(e)=>setInputDescricao(e.target.value)}/>
        </StyledLabel>
        <SendButton onClick={atualizar}>Atualizar Tela</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;

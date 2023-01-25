import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {

  const [nome, setNome] = useState("");
  const [imagemdeperfil, setImagemdeperfil] = useState("");
  const [titulo, setTitulo] = useState("");
  const [imagem, setImagem] = useState("")
  const [descricao, setDescricao] = useState("")
  const [enviapage, setEnviapage] = useState(1);



  const [pageFlow, setPageFlow] = useState(1);
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>

        {pageFlow === 1 ? (
            <FormularioLogin
             setPageFlow={setPageFlow}
             nome = {nome}
             imagemdeperfil = {imagemdeperfil}
             setNome = {setNome}
             setImagemdeperfil = {setImagemdeperfil} 
             />
          ) : (
            <FormularioPostagem 
            nome = {nome}
            imagemdeperfil = {imagemdeperfil}
            setNome = {setNome}
            setImagemdeperfil = {setImagemdeperfil} 
            titulo = {titulo}
            imagem = {imagem}
            descricao = {descricao}
            setTitulo = {setTitulo}
            setImagem = {setImagem}
            setDescricao = {setDescricao}
            enviapage = {enviapage}
            setEnviapage = {setEnviapage}
            setPageFlow = {setPageFlow}
            />
          )}
        </aside>
        {enviapage === 2 ? (
        <TelaDaPostagem 
        titulo = {titulo}
        imagem = {imagem}
        descricao = {descricao}
        setTitulo = {setTitulo}
        setImagem = {setImagem}
        setDescricao = {setDescricao}
        />
        ) :(<aside></aside>)
      }
      </Container>
    </>
  );
}

export default App;

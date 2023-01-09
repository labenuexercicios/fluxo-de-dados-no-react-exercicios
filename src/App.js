import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
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

  const [pageFlow, setPageFlow] = useState(1);
    //formulario login
  const [nome, setNome] = useState("")
  const [fotoPerfil, setFotoPerfil] = useState("")
  const [dados, setDados] = useState("")

  //formulario postagem
  const [titulo, setTitulo] = useState("")
  const [imagemPostagem, setImagemPostagem] = useState("")
  const [descricao, setDescricao] = useState("")
  const [dadosPostagem, setDadosPostagem] = useState("")

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header 
            dados = {dados}
            />

          {pageFlow === 1 ? (
            <FormularioLogin setPageFlow={setPageFlow}
            nome = {nome}
            setNome = {setNome}
            fotoPerfil = {fotoPerfil}
            setFotoPerfil = {setFotoPerfil}
            dados = {dados}
            setDados = {setDados}
         />

          ) : (
            <FormularioPostagem 
            titulo = {titulo}
            setTitulo = {setTitulo}
            imagemPostagem = {imagemPostagem}
            setImagemPostagem = {setImagemPostagem}
            descricao = {descricao}
            setDescricao = {setDescricao}
            dadosPostagem = {dadosPostagem}
            setDadosPostagem = {setDadosPostagem}/>

          )}
        </aside>
        <TelaDaPostagem 
        dadosPostagem = {dadosPostagem}/>
      </Container>
    </>
  );
}

export default App;

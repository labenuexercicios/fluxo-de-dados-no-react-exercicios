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

  const [nome, setNome] = useState("")
  const [foto, setFoto] = useState("")
  const [imagem,setImagem] = useState("")
  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao ] = useState("")


  const [pageFlow, setPageFlow] = useState(1);
    return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header nome={nome} foto={foto}/>
          {pageFlow === 1 ? (
            <FormularioLogin setPageFlow={setPageFlow} 
            nome={nome}
            setNome={setNome}
            foto={foto}
            setFoto={setFoto}/>
          ) : (
            <FormularioPostagem
            imagem={imagem}
            setImagem={setImagem}
            titulo={titulo}
            setTitulo={setTitulo}
            descricao={descricao}       
            setDescricao ={setDescricao}            
            
            />
          )}
          
        </aside>
        <TelaDaPostagem 
         imagem={imagem}
         setImagem={setImagem}
         titulo={titulo}
         setTitulo={setTitulo}
         descricao={descricao}       
         setDescricao ={setDescricao} 
        />
      </Container>
    </>
  );
}

export default App;

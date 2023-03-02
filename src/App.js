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
  
  const[inputName,setInputName]=useState("")
  const [inputProFilePicture,setInputProFilePicture]=useState("")
  const [newLogin,setNewLoguin]=useState({})

  const [inputTitulo,setInputTitulo]=useState("")
  const [inputImagem,setInputImagem]=useState("")
  const [inputDescricao,setInputDescricao]=useState("")
  const [newAtualizar,setNewAtualizar]=useState({})

  const atualizar=()=>{
    setNewAtualizar({
      titulo:inputTitulo,
      imagem:inputImagem,
      descricao:inputDescricao
    })
  }

  
  const login = () => {
    setPageFlow(2);
    setNewLoguin({
      nome:inputName,
      imagem:inputProFilePicture
    })

  };
  

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header newLogin={newLogin}/>
          {pageFlow === 1 ? (
            <FormularioLogin login={login} inputName={inputName} setInputName={setInputName}
            inputProFilePicture={inputProFilePicture} setInputProFilePicture={setInputProFilePicture} />
          ) : (
            <FormularioPostagem atualizar={atualizar} inputTitulo={inputTitulo} setInputTitulo={setInputTitulo} inputImagem={inputImagem} setInputImagem={setInputImagem}
            inputDescricao={inputDescricao} setInputDescricao={setInputDescricao}/>
          )}
        </aside>
        <TelaDaPostagem newAtualizar={newAtualizar}/>
      </Container>
    </>
  );
}

export default App;

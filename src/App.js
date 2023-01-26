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
  const [nome, setNome] = useState("")
  const [fotoPerfil, setFotoPerfil] = useState("")
  const [dadosLogin, setDadosLogin] = useState("")

  const [titulo, setTitulo] = useState("")
  const [imagem, setImagem] = useState("")
  const [descricao, setDescricao] = useState("")
  const [dadosPostagem, setDadosPostagem] = useState("")

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header
            dadosLogin={dadosLogin}
          />
          {pageFlow === 1 ? (
            <FormularioLogin
              setPageFlow={setPageFlow}

              nome={nome}
              setNome={setNome}

              fotoPerfil={fotoPerfil}
              setFotoPerfil={setFotoPerfil}

              dadosLogin={dadosLogin}
              setDadosLogin={setDadosLogin}
            />
          ) : (
            <FormularioPostagem
            titulo={titulo}
            setTitulo={setTitulo}

            imagem={imagem}
            setImagem={setImagem}

            descricao={descricao}
            setDescricao={setDescricao}

            dadosPostagem={dadosPostagem}
            setDadosPostagem={setDadosPostagem}
            />
          )}
        </aside>
        <TelaDaPostagem
        dados={dadosPostagem}
        />
      </Container>
    </>
  );
}

export default App;

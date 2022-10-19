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

  const dataBase = {
      name: ['guirmes', 'luquinhaa', 'dixxgab', 'marcs.h', 'juan_hue', 'ammal_da_depressao']
    }

  const [user, setUser] = useState('');
  const [imgProfile, setImgProfile] = useState(''); //USE ESSA IMAGEM: https://picsum.photos/seed/picsum/200/300

  const [title, setTitle] = useState('');
  const [post, setPost] = useState(''); //USE ESSA IMAGEM: https://picsum.photos/536/354
  const [describe, setDescribe] = useState('');

  const titleState = (e)=>{
    setTitle(e.target.value);
    console.log('titulo: ',e.target.value);
  }

  const postState = (e) => {
    setPost(e.target.value);
    console.log('imagem: ', e.target.value);
  }

  // const describeState = (e) => {
  //   setDescribe(e.target.value);
  //   console.log('descrição: ', e.target.value);
  // }

  function userState(e){
    setUser(e.target.value);
    console.log('Usuário ->', e.target.value)
  }

  function imgState(e){
    setImgProfile(e.target.value);
    console.log('imagem ->', e.target.value)
  }

  const [pageFlow, setPageFlow] = useState(1);

  const login = () => {
    if(user !== dataBase.name[0]&&user !== dataBase.name[1]&&user !== dataBase.name[2]&&user !== dataBase.name[3]&&user !== dataBase.name[4]&&user !== dataBase.name[5]){
      alert('Nome de usuário incorreto!')
    }else if(imgProfile.length === 0){
      alert('Insira sua imagem de perfil!')
    }
    else{
      setPageFlow(2);
    }    
  };
  
  const infoPost = {
    name: user,
    imgUser: imgProfile,
    title: title,
    post: post,
    describe: describe
  }

  function publicar(e){
    setDescribe(e.target.value)
  }
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header user={infoPost} imgProfile={imgProfile}/>
          {pageFlow === 1 ? (
            <FormularioLogin user={user} imgProfile={imgProfile} setPageFlow={setPageFlow}
            userState={userState}
            imgState={imgState}
            login = {login}
            />
          ) : (
            <FormularioPostagem title={title} titleState={titleState}
            post = {post} postState = {postState}
            describe = {infoPost} describeState = {publicar}
            publicar = {publicar}
            />
          )}
        </aside>
        <TelaDaPostagem title={title}
        post = {post}
        describe = {describe}/>
      </Container>
    </>
  );
}

export default App;

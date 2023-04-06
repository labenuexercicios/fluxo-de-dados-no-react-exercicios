import { createGlobalStyle } from "styled-components";
import ProfileScreen from "./screens/ProfileScreen";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
  }

  body {
    height: 100vh;
    width: 100vw;
  }

  #root {
    height: 100%;
    width: 100%;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />

      <ProfileScreen />
    </>
  );
}

export default App;

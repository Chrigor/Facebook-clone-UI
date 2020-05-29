import { createGlobalStyle } from 'styled-components';



const GlobalStyle = createGlobalStyle`

  html, body {
    margin:0;
    padding:0;
    background-color:#18191A;
  }

  body {
    overflow-x:hidden;
  }

  button {
    border: none;
  }

`;

export default GlobalStyle;
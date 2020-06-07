import { createGlobalStyle } from 'styled-components';



const GlobalStyle = createGlobalStyle`

  * {
    box-sizing:border-box;
  }

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

  button:visited, input:visited, input:focus {
    border: none;
  }



`;

export default GlobalStyle;
import { createGlobalStyle } from 'styled-components';



const GlobalStyle = createGlobalStyle`

  * {
    box-sizing:border-box;
  }

  html, body {
    margin:0;
    padding:0;
    -webkit-font-smoothing:antialized;
  }

  body {
    overflow-x:hidden;
    background-color:rgba(24,25,26, 0.4);
  }

  hr {
    width: 100%;
    height: 1px;
    border: 0px;
    border-top: 1px solid #333;
    background-color: #333;
  }

  button {
    border: none;
  }

  button:focus, input:focus{
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;

export default GlobalStyle;
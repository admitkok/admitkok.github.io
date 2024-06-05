import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #0A0A0A;
    width: 100%;
    font-family: 'IBM Plex Sans', Helvetica, Arial, sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
  }
  
  
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;

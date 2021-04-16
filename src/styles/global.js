import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
    }

  html, body, #root {
    height: 100%;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Rubik', sans-serif;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    font-family: 'Rubik', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: yellow;
  }

  ::selection {
    background: #000;
    color: yellow;
  }
`;

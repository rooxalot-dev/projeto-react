import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    background: #f0f0f5 url(${githubBackground}) no-repeat 70% top;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }
`;

export default GlobalStyle;

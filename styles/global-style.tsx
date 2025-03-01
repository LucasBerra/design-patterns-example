import { createGlobalStyle, css } from 'styled-components';

const reset = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: #f8f8f7;
    font-family: 'Inter', sans-serif;
  }
  html,
  body {
    max-width: 100vw;
    background-color: #383838;
  }
  main {
    padding: 32px 0px;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${reset}
`;

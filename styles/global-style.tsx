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
    min-height: 100vh;
    background: linear-gradient(135deg, rgba(40, 40, 40, 1) 20%, rgba(72, 72, 72, 1) 100%);
  }
  main {
    padding: 32px 0px;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${reset}
`;

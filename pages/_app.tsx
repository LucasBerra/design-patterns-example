import { GlobalStyle } from '../styles/global-style';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;

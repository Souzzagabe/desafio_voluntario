import React from 'react';
import ReactDOM from 'react-dom/client'; // Importe createRoot de react-dom/client
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/theme/Global.Style';
import theme from './components/theme/theme';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

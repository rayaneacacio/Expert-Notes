import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from "./styles/global";
import { Toaster } from 'sonner';
import { Home } from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <Home />
      <Toaster richColors />
    </ThemeProvider>
  </React.StrictMode>,
)

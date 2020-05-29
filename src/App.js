import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'

import Header from './componentes/Header';

function App() {
  return (
    <ThemeProvider theme={{ color: 'red' }}>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

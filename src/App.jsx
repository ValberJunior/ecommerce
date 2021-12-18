import React from 'react';
import { ThemeProvider } from 'styled-components';
import {  Product } from './pages';
import { theme } from './theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Product/>
    </ThemeProvider>
  );
}

export default App;

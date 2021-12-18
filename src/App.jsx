import React from 'react';
import { ThemeProvider } from 'styled-components';
import {  Register } from './pages';
import { theme } from './theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Register/>
    </ThemeProvider>
  );
}

export default App;

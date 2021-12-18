import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Home, ProductList } from './pages';
import { theme } from './theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Home/> */}
      <ProductList/>
    </ThemeProvider>
  );
}

export default App;

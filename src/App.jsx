import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Home, Product, ProductList } from './pages';
import { theme } from './theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Home/>
      <ProductList/> */}
      <Product/>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Home, Login, Product, ProductList, Register } from './pages';
import { theme } from './theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Home/>
      <ProductList/>
      <Product/> */}
      {/* <Register/> */}
      <Login/>
    </ThemeProvider>
  );
}

export default App;

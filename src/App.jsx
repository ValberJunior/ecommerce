import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Cart, Home, Login, Product, ProductList, Register } from './pages';
import { theme } from './theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Home/>
      <ProductList/>
      <Product/>
      <Register/>
      <Login/> */}
      <Cart/>
    </ThemeProvider>
  );
}

export default App;

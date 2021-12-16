import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
    scrollbar-width: none;
    margin: 0;
    padding: 0;
}

body{
    overflow-x: hidden;
    font-family: 'Urbanist', sans-serif;
}

`;

export default GlobalStyle;

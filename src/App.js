import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      Hello World
    </ThemeProvider>
  );
}

export default App;

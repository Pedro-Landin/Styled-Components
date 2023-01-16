import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./theme";
import Title from "./components/title/Title";
import Button from "./components/button/Button";

const GlobalStyle = createGlobalStyle`
html, body {
  background-color: ${props => props.theme.colors.white};
}
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Title />
        <Button>Meu botão</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;

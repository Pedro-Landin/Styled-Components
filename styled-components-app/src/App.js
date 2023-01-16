import { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme, { darkThemeColors} from "./theme";
import Title from "./components/title/Title";
import Button from "./components/button/Button";

const GlobalStyle = createGlobalStyle`
html, body {
  background-color: ${props => props.theme.colors.white};
}
`

const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    ...darkThemeColors
  }
}

function App() {
  const [activeTheme, setActiveTheme] = useState(theme)

  const handleTheme = () => {
    if (activeTheme === theme) {
      setActiveTheme(darkTheme)
    } else {
      setActiveTheme(theme)
    }
  }

  return (
    <ThemeProvider theme={activeTheme}>
      <GlobalStyle />
      <div className="App">
        <Title />
        <Button>Meu botão</Button>
        <Button onClick={handleTheme}>Alterar tema</Button>
        <Title>Outro titulo <span>Teste span</span></Title>
      </div>
    </ThemeProvider>
  );
}

export default App;

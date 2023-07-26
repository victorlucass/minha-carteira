import { ThemeProvider } from "styled-components";
import { Layout } from "./components/layout";
import { GlobalStyle } from "./styles/global";
import { dark } from "./styles/theme/dark";

export function App() {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </>
  );
}

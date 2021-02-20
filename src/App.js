import "./App.css";
import TimelineList from "./components/TimelineList";
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
import AppTitle from "./components/AppTitle";
import SpecialList from "./components/SpecialList";
const theme = {
  backgroundColor: "#427aa1",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppTitle />
      <TimelineList />
      <SpecialList id={2} />
    </ThemeProvider>
  );
}

export default App;

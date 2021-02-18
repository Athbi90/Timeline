import "./App.css";
import TimelineList from "./components/TimelineList";
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
const theme = {
  backgroundColor: "#427aa1",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TimelineList />;
    </ThemeProvider>
  );
}

export default App;

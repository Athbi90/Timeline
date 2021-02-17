import "./App.css";
import { Title, TimeImage } from "./styles.js";
import timelines from "./components/timeline.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title>{timelines[0].title}</Title>
        <TimeImage src={timelines[0].image} />

        <a>Learn React</a>
      </header>
    </div>
  );
}

export default App;

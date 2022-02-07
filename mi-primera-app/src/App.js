import logo from "./logo.svg";
import "./App.css";
import HolaMundo from "./components/HolaMundo";
import AdiosMundo from "./components/AdiosMundo";
import Saludar from "./components/Saludar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HolaMundo />
        <AdiosMundo />
        <Saludar name="Sharon Rossely" />
        <Saludar name="Jerson Zuniga" age="27" />
        <Saludar name="Paco Zuniga" age="35" />
      </header>
    </div>
  );
}

export default App;

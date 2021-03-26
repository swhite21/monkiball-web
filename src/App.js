import "./App.css";
import Header from "./components/header";
import ThreeCanvas from "./components/canvas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <ThreeCanvas />
      </header>
    </div>
  );
}

export default App;

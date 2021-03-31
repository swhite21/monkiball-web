import "./App.css";
import ThreeCanvas from "./components/canvas";
import Header from "./components/header";

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

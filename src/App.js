import "./App.css";
import Parent from "./components/Parent";
import Child from "./components/Child";

function App() {
  const characterName = "Leo";

  return (
    <div className="App">
      <h1>State and Props</h1>
      <Parent />
    </div>
  );
}

export default App;

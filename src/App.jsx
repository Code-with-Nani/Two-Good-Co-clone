import "./App.css";
import Cards from "./components/Cards";
import Home from "./components/Home";

function App() {
  return (
    <div className="main overflow-hidden selection:text-bg selection:bg-zinc-950 bg-bg ">
      <Home />
      <Cards />
    </div>
  );
}

export default App;

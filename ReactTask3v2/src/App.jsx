import { useState } from "react";
import "./App.css";
import GetPokeAPI from "./components/pokemon";

function App() {
  return (
    <>
      <div className="App">
        <h1>Pokedex</h1>
        <p>
          React task using useEffect to fetch API data and showing it in the
          following way;
        </p>
      </div>
      <div>
        <GetPokeAPI />
      </div>
    </>
  );
}

export default App;

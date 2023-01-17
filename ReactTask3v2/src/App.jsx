import { useState } from "react";
import "./App.css";
import GetDogAPI from "./components/getapi";
import logo from "./Doggo.png";

function App() {
  console.log(logo);
  return (
    <>
      <div className="App">
        <img src="{logo}" alt="Photo of a curious dog" className="dogImg" />
        <h1>Random dog facts from API</h1>
        <p>
          React task using useEffect to fetch API data from
          <br />
          <a href="https://kinduff.github.io/dog-api/">
            https://kinduff.github.io/dog-api/
            <br />
          </a>
        </p>
      </div>
      <div>
        <GetDogAPI />
      </div>
    </>
  );
}

export default App;

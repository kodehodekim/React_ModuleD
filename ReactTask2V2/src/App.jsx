// prettier-ignore

// Imports
import Main from "./components/main";
import Header from "./components/header";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Greeting name="Lars Gunnar" children="Code overlord">
        <h3 style={{ fontSize: "80px", textDecoration: "underline" }}>
          c0de 0verl0Rd
        </h3>
      </Greeting>
    </div>
  );
}
export default App;

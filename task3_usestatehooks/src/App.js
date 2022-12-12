import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const multiply = () => {
    setCount(count * 8);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <div>
        <button onClick={increase}>Number +1</button>
        <button onClick={decrease}>Number -1</button>
        <button onClick={reset}>Reset to Zero</button>
        <button onClick={multiply}>Multiply by 7 </button>
      </div>
    </div>
  );
}
export default App;

/* Felt the simple counter was too simple, tried to make this, but never got it to work.*/

// import UserInfo from "./Users";

// function App() {
//   const [age, key] = useState([]);

//   const IncreaseAge = () => {
//     Userage + 1;
//     console.log(age);
//   };

//   const DecreaseAge = () => {
//     age - 1;
//     console.log(age);
//   };

//   const SetAgeOld = () => {
//     age + 100;
//     console.log(age);
//   };

//   return (
//     <div className="App">
//       <header>
//         <h1>Whats my age again?</h1>
//       </header>
//       {UserInfo.map((User, key) => {
//         return (
//           <div>
//             Name: {User.name} Age:{User.age}
//           </div>
//         );
//       })}
//       <button onClick={IncreaseAge}>Increase Age</button>
//       <button onClick={DecreaseAge}>Decrease Age</button>
//       <button onClick={SetAgeOld}>Increase age by 100</button>
//     </div>
//   );
// }
// export default App;

import {
  HashRouter as Router, // A functional component required for using React Router
  Routes, // A container component for our routes
  Route, // Where we are going to put each route
  Link, // For internal linking we are going to use this component
  NavLink, // An alternative Link that can be used to conditionally style the component
  Outlet, // A component that allows us to compose pages, similar to the 'props.children'
  Navigate, // Use this if you want to redirect the user to another URL
} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>HEI</h1>
    </div>
  );
}

export default App;

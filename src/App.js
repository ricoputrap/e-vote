import React from "react";
import Navbar from './main-components/Navbar';
import Home from "./main-components/Home";

function App() {
  return (
    <div className="App">
      <Navbar 
        Home={Home} 
        Vote={Vote} 
        Candidates={Candidates} 
        Result={Result}
      />
    </div>
  );
}

function Vote() {
  return <h1>VOTE</h1>
}
function Candidates() {
  return <h1>CANDIDATES</h1>
}
function Result() {
  return <h1>RESULT</h1>
}

export default App;

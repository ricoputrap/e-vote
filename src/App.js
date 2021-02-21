import './App.css';
import React from "react";
import Navbar from './main-components/Navbar';

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
function Home() {
  return <h1>HOME</h1>
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

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let[name,setName] = useState('Guest');
 
  useEffect(()=>{
    console.log(`user changed to ${name}`);
  },[name]);
  let handleClick= ()=>{
    setName("Alice");
    console.log(name)
  }
  return (
    <div className="App">
      <h2>Welcome, {name}!!!</h2>
      <button onClick={handleClick}>Login as Alice</button>
    </div>
  );
}

export default App;

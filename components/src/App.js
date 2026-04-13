import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Lightswitch from './Lightswitch'

function App() {
  let [room, roomState] = useState(null);

  let handleDataFromChild = (data)=>{
    roomState(data);
  }
  return (
    <div className="App">
      <Lightswitch onDataFromChild = {handleDataFromChild}/>
      <p> {room}</p>
    </div>
  );
}

export default App;

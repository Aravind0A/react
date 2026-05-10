import "./App.css"
import React, {useState, useEffect} from "react";
import image from "./images/forest.webp"
import Child from "./Child";
import Navbar from "./components/Navbar";


function App(){
return(
  <div>
    <Navbar/>
  </div>
);
          
}
export default App;

function color(){
  const[text, setText] = useState('');
  
  return(
    <div>
      <p>{text.length}</p>
      {text.length > 100 && <p>Too long!</p>}
      <textarea onInput={(e)=>{setText(e.target.value)}}></textarea>
      
    </div>
  )
}
import "./App.css"
import React from "react";
import image from "./images/forest.webp"
function App() {
  let name = "Aravind";
  let description = "Unemployed";
  return(
    <div>
      <h1>{name}</h1>
      <p style={{borderColor:"green",backgroundColor:"red", padding:10}}>{description}</p>
      <img src={image}></img>
      <img src="https://play-lh.googleusercontent.com/4YdljK3rnucjgbh5YtfadII4O5QZ6Riob8hV9l-oDx8xllMePbMsa3zHxDJE-Q53z-D9"></img>
    </div>
  );
}

export default App;

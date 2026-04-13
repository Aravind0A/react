import image from "./images/forest.webp"

function App(){
  let name = "Aravind"
  console.log("React app started")
  return(
    <div>
      <h1 style={{color :"red"}}>Welcome to React learning {name}</h1>
      <img className = "internalImage" src={image}/>
      <img src="https://static.toiimg.com/thumb/117738577/117738577.jpg?height=746&width=420&resizemode=76&imgsize=1364222"></img>
      <p>This is your first card with images and styles!</p>
    </div>
  );
}
export default App;

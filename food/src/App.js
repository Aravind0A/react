
import './App.css';
function displayMessage(fav) {
  let update =`i love ${fav}`;
  document.getElementById("demo").innerHTML = update
  console.log("i love ",fav)
}
function App() {

  let food = ["Chicken", "beef", "eggs"]
  for(let i = 0; i< food.length; i++){

  }
  return (
    <div>
      <h1>
        favourite food
      </h1>
      <p id='demo'>Select a food that you love</p>
      <ol>
      {food.map((fav) => {return <li >{fav}
        <button onClick={()=>displayMessage(fav)}>{fav}</button>
      </li>})}
</ol>
    </div>
  );
}

export default App;

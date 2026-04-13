import "./App.css"
import React, {useState, useEffect} from "react";
import image from "./images/forest.webp"
import Child from "./Child";

function Click(){
  console.log("clicked!!!")
}

function App(){
  let greet = "hi"
  let num = 34.6;
  let name = "Arv"
  let greeting = true, display;
  let arr =["dbz", "one p", "jjk","pkmn"];
  let user = { name : "Arv" , age : 20 }
  let greetings = [{name:"Vijay",location:"Kochi"},{name:"Rajesh", location:"Delhi"}];
  let name2 = "joy";
  let age = 32; 

  let [count, setCount] = useState(0);
  let [name1, setName] = useState('')
  let [count1, setCount1] = useState(0);

  useEffect(()=>{
    console.log("component rendered");
  },[count]);

  let handleClick =() => {
    setCount(count +1);
  }

  function handleName(ev){
    setName(ev.target.value)
  }

  let handleSubmit = (ev) =>{
    ev.preventDefault();
    alert(`hello ${name1}`);
  }

  function incrementCount(){
    setCount(count +1)
  }

  if(greeting){
     display = <h3>{arr[0]}</h3>
  }
 console.log(greet);
  return(
    <div>
      <h1 className="greetstyle">Hello {name}!</h1>
      <p>{greet} user</p>
      <div className='row'>
      <div className='col-md-4 bg-primary mr-2'> column 1</div>
      <div className='col-md-4 bg-secondary' > column 2</div>
      </div>
      {/* <img src="https://png.pngtree.com/thumb_back/fh260/background/20240801/pngtree-new-cb-background-images-photos-pics-wallpaper-pictures-image_16123145.jpg"></img> */}
      <img src={image}></img>
      <p>Num is : {num}</p>
      <p>{arr[2]}</p>
      <p>{display}</p>
      {arr.map((items) => {return <p>{items}</p>})}
      <p>location is {greetings[0].location}</p>{greetings[0].name}
      {greetings.map((details) => {return <p>name is {details.name} and location is {details.location}</p>})}
      <input type="text" value={name}/>
      <br></br>
      <input type="text" value={arr[2]}></input>
      <input type="text" value={user.age}></input>

      <button onClick={() => {console.log("welcome!!!")}}>Click me</button>
      <button onClick={Click}>Submit</button>

      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>

      {/* <p>Name:</p>
      <input type="text" value={name1} onChange={handleName}></input>
      <p>hello, {name1}</p> */}

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name1} onChange={(e)=> setName(e.target.value)}></input>
        <button type="submit">Submit</button>
      </form>
      
      {/* <Child name2={name2} age={age}>
        <p>Hello there!!</p>
        <h3>Buhahaha</h3>

        </Child> */}
    {/* <p>Count: { count } </p>
           <Child increment= { incrementCount } /> */}


    </div> 
    
  );
}
export default App
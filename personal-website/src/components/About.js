import React from "react";

function About(){
   let headingColor;
    let hanldeButton =()=>{
        headingColor ="lightblue";
        let update = "Hello from React! I love this page!";
        document.getElementById("demo").innerHTML = update;
        document.getElementById("demo1").style.backgroundColor = headingColor;
    }
    return(
        <div>
            <h3 id="demo1" style={{backgroundColor:headingColor}}>This is About page</h3>
            <p id="demo">Click button to see my enthusiasm</p>
            <button onClick={hanldeButton}>Show enthusiasm</button>
        </div>
    );
}

export default About;
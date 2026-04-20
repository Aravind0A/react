import React, { useState } from "react";
import Navbar from "./Navbar";

function Crud(){
    let[students, setStudents] = useState([]);
    
    return(
        <div>
        <div> <Navbar/> </div><br/>
             <div className = "container ">
      <div className = "row" >
          <div className= "col-md-8">
        <h3>CRUD</h3>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Crud
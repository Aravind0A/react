import react from "react";
import Navbar from "./Navbar";
import {useNavigate} from "react-router-dom";

function UserRegistration(){
    let navigate = useNavigate();

    let handleSubmit = ()=>{
        navigate("/login")
    }
    return(
        <div>
            <Navbar/>
            <h2 className="heading">User Registration</h2>
            <div className="form-container">
		 <form className="my-form">
		     <label>Name</label>
		     <input type="text" id="name" name="name" ></input><br/>
			 <label>Email</label>
			 <input type="email" id="email" name="email" ></input><br/>
			 <label>Date of Birth</label>
			 <input type="text" id="dob" name="dob" ></input><br/>
			 <label>Address</label>
			 <input type="text" id="address" name="address"></input><br/>
			 <label>Password</label>
			 <input type="password" id="password" name="password"></input><br/>
		     <button onClick={handleSubmit}>Submit</button>
		  </form>
          </div>
        </div>
        
    )
}

export default UserRegistration;
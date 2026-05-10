import { useState } from "react";
import Navbar from "./Navbar";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function UserRegistration(){
    let navigate = useNavigate();
    let[name, setName] = useState('');
    let[email, setEmail] = useState('');
    let[dob, setDateOfBirth] = useState('');
    let[address, setAddress] = useState('');
    let[password, setPassword] = useState('');
    let[confPassword, setConfPassword] = useState('');
    let [errorMessage, setErrorMessage] = useState('');

    let handleSubmit = (e)=>{
        e.preventDefault();
        if(password!==confPassword){
            alert("passwords do not match");
        } else{
        let user = {
            name : name,
            email : email,
            dob : dob,
            address : address,
            password : password
        }
        axios.post("http://localhost:8080/register",user).then(response =>{
        setErrorMessage('')
        
        navigate("/login")
        }).catch(error=>{
            if(error.response.data.errors){
                setErrorMessage(Object.values(error.response.data.errors).join(''));
            } else{
                setErrorMessage('Failed to connect to api')
            }
        })
    }
    }
    return(
        <div>
            <Navbar/>
            <h2 className="heading">User Registration</h2>
            {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}

            <div className="form-container">
		 <form className="my-form" onSubmit={handleSubmit}   >
		     <label>Name</label>
		     <input type="text" name="name" value={name} onInput={(e)=>setName(e.target.value)} required></input><br/>
			 <label>Email</label>
			 <input type="email" name="email" value={email} onInput={(e)=>setEmail(e.target.value)} required></input><br/>
			 <label>Date of Birth</label>
			 <input type="date" name="dob" value={dob} onInput={(e)=>setDateOfBirth(e.target.value)} required></input><br/>
			 <label>Address</label>
			 <input type="text" name="address" value={address} onInput={(e)=>{setAddress(e.target.value)}} required></input><br/>
			 <label>Password</label>
			 <input type="password" name="password" value={password} onInput={(e)=>setPassword(e.target.value)} required></input><br/>
             <label>Confirm Password</label>
			 <input type="password" name="password" value={confPassword} onInput={(e)=>setConfPassword(e.target.value)} required></input><br/>
		     <button type="submit">Submit</button>
		  </form>
          </div>
        </div>
        
    )
}

export default UserRegistration;
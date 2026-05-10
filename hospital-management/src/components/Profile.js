import Navbar from "./Navbar";
import axios from "axios";
import { useState, useEffect } from "react";

function Profile(){

    let userid = localStorage.getItem("userId");
    let token = localStorage.getItem("token");
    let [errorMessage, setErrorMessage] = useState('');
    let [user, setUser] = useState({});
    let[newPassword, setNewPassword] = useState('');
    useEffect(()=>{
    axios.get(`http://localhost:8080/user/${userid}`,{
        headers : {Authorization: 'Bearer '+token}
    }).then(response =>{
        setErrorMessage('');
        setUser(response.data);
    }).catch(error=>{
        if(error.response.data.errors){
            setErrorMessage(Object.values(error.response.data.errors).join(' '));   
        } else{
            setErrorMessage("failed to connect to api");
        }
    })
    }, [])

    let handleSubmit = (e) =>{
        e.preventDefault();
            
        axios.put(`http://localhost:8080/user/passwordChange/${userid}`,{
            password : newPassword
    },{
        headers : {Authorization: 'Bearer '+token}
    }).then(response =>{
        setErrorMessage('');  
        alert(response.data);
        setNewPassword('');
    }).catch(error=>{
        if(error.response.data.errors){
            console.log("error: " + error.response.data.errors);
            setErrorMessage(Object.values(error.response.data.errors).join(' '));   
        } else{
            setErrorMessage("failed to connect to api");
        }
    })
    
}

    return(
        <div>
            <Navbar/>
            <div className="form-container">
            <h3 className="heading">My Profile</h3>
            {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}
		 <form className="my-form" onSubmit={handleSubmit}>
		     <label>Name</label>
		     <input type="text" id="name" name="name" value={user.name} disabled></input><br/>
			 <label>Email</label>
			 <input type="email" id="email" name="email" value={user.email} disabled></input><br/>
			 <label>Date of Birth</label>
			 <input type="text" id="dob" name="dob" value={user.dob} disabled></input><br/>
			 <label>Address</label>
			 <input type="text" id="address" name="address" value={user.address} disabled></input><br/>
			 <label>Old Password</label>
			 <input type="password" id="password" name="password" value={user.password} disabled></input><br/>
             <label>New Password</label>
			 <input type="password" id="newPassword" name="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}></input><br/>
		     <button type="submit">Submit</button>
		  </form>
          </div>
        </div>
    )
}

export default Profile;
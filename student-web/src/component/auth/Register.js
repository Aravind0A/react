import { useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register(){
    var [user_name, setName] = useState('');
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    var [errorMessage, setErrorMessage] = useState('');
    let navigate = useNavigate();
    function registerUser(){
        var user = {
            user_name: user_name,
            email: email,
            password: password,
        }
        console.log(user);
        axios.post('https://worksheet-student.mashupstack.com/register',user).then(response=>{
            setErrorMessage('');

            navigate('/login');
        }).catch(error=>{
            if (error.response && error.response.data && error.response.data.errors) {
        setErrorMessage(Object.values(error.response.data.errors).join(' '));
    } else {
        setErrorMessage('Failed to connect to api');
    }
        })
    }
    return(
        <div>   
            <Navbar/>
            <div className="container">
            <div className="row">
                <div className="col-8 offset-2">
                    <h1>Register</h1>
                    {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}
                    <div className="form-group">
                        <label>UserName:</label>
                        <input type="text"
                        className="form-control"
                        value={user_name}
                        onInput={(event)=>setName(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text"
                        className="form-control"
                        value={email}
                        onInput={(event)=>setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password"
                        className="form-control"
                        value={password}
                        onInput={(event)=>setPassword(event.target.value)}
                        />
                    </div>
            
                    <div className="form-group">
                        <button className="btn btn-primary float-right" onClick={registerUser}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}

export default Register;
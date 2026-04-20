import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

function Login(){
    let[email,setEmail] = useState('');
    let[password, setPassword] = useState('');
    let[errorMessage, setErrorMessage] = useState('');
    function loginButton(){
        axios.post('https://worksheet-auth.mashupstack.com/login',{
            email: email,
            password: password
        }).then(response =>{
            setErrorMessage('');
            console.log(response.data.token);
            alert("login successful")
        }).catch(error=>{
            if(error.response.data.errors){
                setErrorMessage(Object.values(error.response.data.errors).join(' '))
            }else if(error.response.data.message){
                setErrorMessage(error.response.data.message)
            }else{
                setErrorMessage('Failed to login user. Please contact admin')
            }
        })
    }
    return(
        <div>
            <Navbar/>
        <div className="container">
              <div className="row">
                <div className="col-8 offset-2">
                    <h3>Login</h3>
                    {errorMessage?<div className="alert alert-danger">{errorMessage} </div>:''}
                
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" value={email} onInput={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={password} onInput={(e)=>setPassword(e.target.value)}></input>
                </div>
                
                <div className="form-group">
                    <button className="btn btn-primary float-right" onClick={loginButton}>Login</button>
                </div>
              </div>

            </div>
        </div>
        </div>
    )
}

export default Login;
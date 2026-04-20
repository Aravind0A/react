import { use, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function Register(){
 let[user_name, setName] = useState('');
    let[email, setEmail] = useState('');
    let[password, setPassword] = useState('');
    let[confirmPassword, setConfirmPassword] = useState('');
    let[errorMessage, setErrorMessage] = useState('');
    let navigate = useNavigate();
    function registerButton(){
        let user = {
            user_name: user_name,
            email:email,
            password: password,
        }
        if(!password.match(confirmPassword)){
            alert("passwords do not match")
        } else{
        axios.post('https://worksheet-auth.mashupstack.com/register', user).then(response=>{
            setErrorMessage('');
            navigate('/login');
            alert('Registration Successful')
        }).catch(error =>{
                if(error.response.data.errors){
                setErrorMessage(Object.values(error.response.data.errors).join(' '));
            }else{
                setErrorMessage('Failed to connect to api');
            }
        })
    }
}
    return(
        <div>
            <Navbar/>
            <div className="container">
              <div className="row">
                <div className="col-8 offset-2">
                    <h3>Register</h3>
                    {errorMessage?<div className="alert alert-danger">{errorMessage} </div>:''}
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" value={user_name} onInput={(e)=>setName(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" value={email} onInput={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>PAssword</label>
                    <input type="password" value={password} onInput={(e)=>setPassword(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>Confirm passowrd</label>
                    <input type="password" value={confirmPassword} onInput={(e)=>setConfirmPassword(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary float-right" onClick={registerButton}>Register</button>
                </div>
              </div>

            </div>
        </div>
        </div>
    )
}

export default Register;

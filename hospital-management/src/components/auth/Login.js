import { useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import { setUser } from "../store/authSlice";

function Login(){

    let[email, setEmail] = useState('');
    let[password, setPassword] = useState('');
    var [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

       function handleSubmit() {
        axios.post('http://localhost:8080/login',{
            email:email,
            password:password
        }).then(response=>{
            setErrorMessage('')
            var user = {
                email:email,
                token:response.data.token
            }
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userId", response.data.userId);
            dispatch(setUser(user));
            navigate("/doctors");
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
            <h3 className="heading">Login</h3>
            {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}

            <div className="container">
            <div className="row">
                <div className="col-8 offset-2">
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
                        <button className="btn btn-primary float-right" onClick={handleSubmit}>Login</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Login;
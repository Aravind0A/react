import { useState } from "react";
import Navbar from "../Navbar";
import axios from "axios"

function Login(){
    let [email, setEmail] = useState('');
    let[password, setPassword] = useState('');
    let[errorMessage, setErrorMessage] = useState('');
    function attemptLogin() {
        axios.post('https://demo-blog.mashupstack.com/api/login',{
            email:email,
            password:password
        }).then(response=>{
            setErrorMessage('')
            console.log(response.data.token)
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
                    <h1>Login</h1>
                    {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}
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
                        <button className="btn btn-primary float-right" onClick={attemptLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login;
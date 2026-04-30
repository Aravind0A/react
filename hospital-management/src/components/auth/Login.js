import { useState } from "react";
import Navbar from "../Navbar";

function Login(){

    let[email, setEmail] = useState('');
    let[password, setPassword] = useState('');
    return(
        <div>
            <Navbar/>   
            <h3 className="heading">Login</h3>
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
                        <button className="btn btn-primary float-right" >Login</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Login;
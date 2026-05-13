import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { removeUser } from "./store/authSlice";


function Navbar() {
     var user = useSelector(store=>store.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function logout(){
        if(user){
            axios.post("http://localhost:8080/logout",{},{
                headers:{'Authorization':"Bearer "+ user.token}
            }).then(() => {
            localStorage.removeItem('token');   
            localStorage.removeItem('userId');
            localStorage.removeItem('docId');
            dispatch(removeUser());
            navigate('/login');
        }).catch(() => {
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            dispatch(removeUser());
            navigate('/login');
        });
    }
}
    return <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      
        <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div
        className="collapse navbar-collapse mr-auto"
        id="navbarNav"
        style={{ float: "left" }}
        >
            <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>
                <li className="nav-item">
                    <NavLink 
                    to={"/userRegister"} 
                    className={({isActive}) => 'nav-link ' + (isActive ? 'active' : '')
                    } 
                    >
                        Home
                    </NavLink>
                    </li>
                
                <li className="nav-item">
                    <NavLink 
                    to={"/doctors"} 
                    className={({isActive}) => 'nav-link ' + (isActive ? 'active' : '')
                    } 
                    >
                        Doctors
                    </NavLink>
                    </li>
                <li className="nav-item">
                    <NavLink 
                    to={"/myAppointment"} 
                    className={({isActive}) => 'nav-link ' + (isActive ? 'active' : '')
                    } 
                    >
                        My Appointments
                    </NavLink>
                    </li>

                    <li className="nav-item">
                    <NavLink 
                    to={"/profile"} 
                    className={({isActive}) => 'nav-link ' + (isActive ? 'active' : '')
                    } 
                    >
                        Profile
                    </NavLink>
                    </li>
            {user?
                 <li className="nav-item">
           <span className="nav-link" onClick={logout}>Logout</span>
                </li>:
                <li className="nav-item">
                <NavLink 
                to={"/login"} 
                className={({isActive}) => 'nav-link ' + (isActive ? 'active' : '')
                } 
                >
                    Login
                </NavLink>
                </li>
            }
            </ul>
        </div>
    </nav>;
}

export default Navbar;
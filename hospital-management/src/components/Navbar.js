import { NavLink } from "react-router-dom";


function Navbar() {
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
                    className={
                        'nav-link '+
                        (status => status.isActive ? 'active' : '')
                    } 
                    >
                        Home
                    </NavLink>
                    </li>
                
                <li className="nav-item">
                    <NavLink 
                    to={"/doctors"} 
                    className={
                        'nav-link '+
                        (status => status.isActive ? 'active' : '')
                    } 
                    >
                        Doctors
                    </NavLink>
                    </li>
                {/* <li className="nav-item">
                <NavLink 
                to={"/bookAppointment"} 
                className={
                    'nav-link '+
                    (status => status.isActive ? 'active' : '')
                } 
                >
                    Book Appointment
                </NavLink>
                </li> */}
                <li className="nav-item">
                    <NavLink 
                    to={"/myAppointment"} 
                    className={
                        'nav-link '+
                        (status => status.isActive ? 'active' : '')
                    } 
                    >
                        My Appointments
                    </NavLink>
                    </li>

                    <li className="nav-item">
                    <NavLink 
                    to={"/profile"} 
                    className={
                        'nav-link '+
                        (status => status.isActive ? 'active' : '')
                    } 
                    >
                        Profile
                    </NavLink>
                    </li>
            
            </ul>
        </div>
    </nav>;
}

export default Navbar;
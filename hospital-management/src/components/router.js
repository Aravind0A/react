import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import UserRegistration from "./UserRegistration";
import DoctorList from "./DoctorList";
import BookAppointment from "./BookAppointment";
import MyAppointment from "./MyAppointments";
import Profile from "./Profile";
import Login from "./auth/Login";

let router = createBrowserRouter([
    {path:"", element:<App/>},
    {path:"/userRegister",element:<UserRegistration/>},
    {path:"/doctors", element:<DoctorList></DoctorList>},
    {path:"/bookAppointment", element:<BookAppointment/>},
    {path:"/myAppointment", element:<MyAppointment/>},
    {path:"/profile", element:<Profile/>},
    {path:"/login", element:<Login/>}
])

export default router;
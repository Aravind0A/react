import { createBrowserRouter } from "react-router-dom";
import Register from "./auth/Register";
import Login from "./auth/Login";
import App from "../App";
import StudentList from "./StudentList";

let router = createBrowserRouter([
    {path:'',element:<App/>},
    {path:'/register', element:<Register/>},
    {path:'/login', element:<Login/>},
    {path:'/studentList', element:<StudentList/>}
])

export default router;
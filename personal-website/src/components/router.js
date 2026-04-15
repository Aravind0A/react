import { createBrowserRouter } from "react-router-dom";
import About from "./About";
import App from "../App";
import Home from "./Home";
import Contact from "./Contact";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'about', element: <About/> },
    {path: 'home', element:<Home></Home>},
    {path: 'contact', element:<Contact/>}
]);

export default router;
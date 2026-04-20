import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Crud from "./Crud";


const router = createBrowserRouter([
    { path: '', element: <App/> },
    {path: 'crud', element: <Crud></Crud>}
]);

export default router;
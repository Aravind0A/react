import { createBrowserRouter } from "react-router-dom";
import Welcome from "./Welcome";
import App from "../App";
import Riya from "./Riya";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'welcome', element: <Welcome/> },
    {path: 'riya', element:<Riya></Riya>},
    {path:'student/:names', element:<Welcome></Welcome>}
]);

export default router;
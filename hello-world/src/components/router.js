import { createBrowserRouter } from "react-router-dom";
import Aboutus from "./Aboutus";
import App from "../App";
import Crud from "./Crud";
import ListPosts from "./blog/ListPost";
import CreatePost from "./blog/CreatePost";
import ViewPost from "./blog/Viewpost";
import EditPost from "./blog/EditPost";
import Register from "./auth/register";
import Login from "./auth/Login";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'aboutus', element: <Aboutus/> },
    {path: 'crud', element: <Crud></Crud>},
    {path: 'blog/posts',element:<ListPosts/>},
    { path : 'blog/posts/create' , element : <CreatePost/> },
    { path: 'blog/posts/:postId', element: <ViewPost/>},
    { path : '/blog/posts/:postId/edit', element: <EditPost/>},
    {path:'register', element:<Register/>},
    {path:'/login', element:<Login/>}
]);

export default router;
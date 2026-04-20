import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import ListPosts from "./blog/ListPosts";
import CreatePost from "./blog/CreatePost";
import ViewPost from "./blog/ViewPost";
import EditPost from "./blog/EditPost";

let router = createBrowserRouter([
    {path:'',element:<App/>},
    {path:'/blog/posts/', element:<ListPosts/>},
    {path:'/blog/posts/create', element:<CreatePost/>},
    {path:'/blog/posts/:postId', element:<ViewPost/>},
    {path:'/blog/posts/:postId/edit', element:<EditPost/>}
]);

export default router;
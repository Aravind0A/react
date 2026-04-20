import axios from "axios";
import Navbar from "../Navbar";
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";


function ViewPost(){
    let {postId} = useParams();
    let[post, setPost] = useState({title : '', author: '', published_year: '', genre: ''})
    useEffect(()=>{
        axios.get('https://worksheet-library.mashupstack.com/books/'+postId).then(response=>{
            setPost(response.data)
        })
    },[postId]);
    return(
        <div>
            <Navbar/>
            <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header"><h3>{post.title}</h3></div>
                        <div className="card-body">{post.genre}</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
            
    )
}

export default ViewPost;
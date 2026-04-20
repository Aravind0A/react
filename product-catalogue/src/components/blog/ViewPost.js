import axios from "axios";
import Navbar from "../Navbar";
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";


function ViewPost(){
    let {postId} = useParams();
    let[post, setPost] = useState({name : '', price: '', category: '', quantity: ''})
    useEffect(()=>{
        axios.get('https://worksheet-catalogue.mashupstack.com/products/'+postId).then(response=>{
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
                        <div className="card-header"><h3>{post.name}</h3></div>
                        <div className="card-body">{post.price}</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
            
    )
}

export default ViewPost;
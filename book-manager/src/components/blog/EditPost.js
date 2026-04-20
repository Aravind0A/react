import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import axios from "axios";


function EditPost(){
    let[title, setTitle] = useState("");
    let[author, setAuthor] = useState("");
    let[published_year, setPublishYear] = useState("");
    let[genre, setGenre] = useState("");
    let {postId} = useParams()
    
    let navigate = useNavigate();
    useEffect(()=>{
        axios.get("https://worksheet-library.mashupstack.com/books/"+postId).then(response =>{
            setTitle(response.data.title);
            setAuthor(response.data.author);
            setPublishYear(response.data.published_year);
            setGenre(response.data.genre);
        })
    },[postId])
    function updatePost(){
        axios.put("https://worksheet-library.mashupstack.com/books/"+postId, {
            title: title,
            author: author,
            published_year : published_year,
            genre: genre
        }).then(response => {
            alert(response.data.message)
        })
            navigate('/blog/posts/')

    }
    return(
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-8 offset-2">
                        <h1 className="text-center">Edit Post</h1>
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Author</label>
                            <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Published Year</label>
                            <input type="text" value={published_year} onChange={(e)=> setPublishYear(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Genre</label>
                            <input type="text" value={genre} onChange={(e)=>setGenre(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary float-right" onClick={updatePost}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPost;
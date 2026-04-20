import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import axios from "axios";


function EditPost(){
   let[name, setName] = useState("");
    let[price, setPrice] = useState("");
    let[category, setCategory] = useState("");
    let[quantity, setQuantity] = useState("");
    let {postId} = useParams()
    
    let navigate = useNavigate();
    useEffect(()=>{
        axios.get("https://worksheet-catalogue.mashupstack.com/products/"+postId).then(response =>{
            setName(response.data.name);
            setPrice(response.data.price);
            setCategory(response.data.category);
            setPrice(response.data.quantity);
        })
    },[postId])
    function updatePost(){
        axios.put("https://worksheet-catalogue.mashupstack.com/products/"+postId, {
            name: name,
            price: price,
            category : category,
            quantity: quantity
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
                            <label>Name</label>
                            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Category</label>
                            <input type="text" value={category} onChange={(e)=> setCategory(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Quantity</label>
                            <input type="text" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
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
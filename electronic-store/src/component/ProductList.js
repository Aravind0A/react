import { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import {  useSelector } from "react-redux";
import store from "../store/store";

function ProductList(){
    
    var user = useSelector(store=>store.auth.user);
    let[data, setData] = useState([])
    if(user){
    axios.get("https://worksheet-product.mashupstack.com/product",{
        headers: {'Authorization':"Bearer "+user.token}
    }).then(response=>{
        setData(response.data)
    }).catch((error)=>{
        console.log(error.response.data.error)
    });
}
    return(
        <div>
            <Navbar/>
            <h3>Product List</h3>
            <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
            {data.map((product)=>(
                <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                </tr>
            ))}
        </tbody>
        </table>
        </div>
    )
}

export default ProductList;
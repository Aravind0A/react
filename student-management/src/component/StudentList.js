import Navbar from "./Navbar";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";


function StudentList(){
    var user = useSelector(store=>store.auth.user);
    let[data, setData] = useState([])
    if(user){
    axios.get("https://worksheet-student.mashupstack.com/students",{
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
            <h3>Student List</h3>
            <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
            {data.map((student)=>(
                <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                   
                </tr>
            ))}
        </tbody>
        </table>
        </div>
    )
}

export default StudentList;
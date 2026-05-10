import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function DoctorList(){
     let [errorMessage, setErrorMessage] = useState('');
     let token = localStorage.getItem("token");
     let userId = localStorage.getItem("userId");
     let[doc, setDoc]= useState([]);
    console.log("ada " + userId);
    let navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:8080/doctorList",{
            headers: { Authorization: `Bearer ${token}` }
        }).then(response=>{
            setErrorMessage('');
            setDoc(response.data);
        //     console.log(response.data.getItem("docId"));
        //    console.log(response.data[0].id);
        }).catch(error=>{
            if(error.response.data.errors){
                setErrorMessage(Object.values(error.response.data.errors).join(''));
            } else{
                setErrorMessage('Failed to connect to api')
            }
        })
    }, [])
    let handleSubmit = (docId, docName)=>{
        localStorage.setItem("docId", docId);
        localStorage.setItem("docName", docName);
        navigate("/bookAppointment");
    }
    return(
        <div>
            <Navbar/>
            <h3 style={{textAlign: "center", marginTop: "20px"}}>Doctors</h3>
             {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}

            <div className="container mt-4">
                <div className="row justify-content-center g-4">

                    {doc.map((doctor) => (
                        <div className="col-md-4" key={doctor.id}>
                            <div className="card border-primary shadow-sm">
                                <div className="card-header bg-primary text-white fw-bold">
                                    {doctor.doctorName}
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{doctor.experience} years experience</h5>
                                    <p className="card-text text-muted">{doctor.specialization}</p>
                                    <button onClick={() => handleSubmit(doctor.id, doctor.doctorName)} className="btn btn-primary w-100">Book</button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default DoctorList;


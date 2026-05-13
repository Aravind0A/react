import { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import checkAuth from "./auth/checkAuth";

function BookAppointment(){

    let[appointmentDate, setAppointmentDate] = useState('');
    let[time, setTime] = useState('');
    let userid = localStorage.getItem("userId");
    let doctorid = localStorage.getItem("docId");
    let [errorMessage, setErrorMessage] = useState('');
    let token = localStorage.getItem("token");
    let navigate = useNavigate(); 

    let handleSubmit = (e)=>{
    e.preventDefault();

        axios.post("http://localhost:8080/bookappointments",{
            userId : Number(userid),
            doctorId : Number(doctorid),
            appointmentDate : appointmentDate,
            time : time
        },{
            headers: {Authorization : 'Bearer '+token}
        }).then(response =>{
            setErrorMessage('');
            localStorage.setItem("appointmentDate", response.data.appointmentDate);
            localStorage.setItem("appointmentId", response.data.id);

            alert("Appointment booked successfully");
            navigate("/myAppointment");
        }).catch(error=>{
            if(error.response.data.errors){
                setErrorMessage(Object.values(error.response.data.errors).join(' '));
            } else{
                setErrorMessage("failed to connect to api")
            }
        })
        
    }
    return(
        <div>
            <Navbar/>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">

                        <div className="card shadow-sm border-primary">
                            <div className="card-header bg-primary text-white fw-bold">
                                Book an Appointment
                            </div>
                          {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}

                            <div className="card-body">

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Date of Appointment</label>
                                        <input type="date" className="form-control" id="doa" name="doa" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} required/>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Time of Appointment</label>
                                        <input type="time" className="form-control" id="toa" name="toa" value={time} onChange={(e) => setTime(e.target.value)} required/>
                                    </div>

                                    <button type = "submit" className="btn btn-primary w-100">
                                        Book Appointment
                                    </button>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default checkAuth(BookAppointment);
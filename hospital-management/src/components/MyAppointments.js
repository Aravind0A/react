import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";


function MyAppointment(){

    let doctorName = localStorage.getItem("docName");
    let[errorMessage, setErrorMessage] = useState('');
    let userId = localStorage.getItem("userId");
    let token = localStorage.getItem("token");
    let appointmentDate = localStorage.getItem("appointmentDate");
    let[appointments, setAppointments] = useState([]);
    let appointmentId = localStorage.getItem("appointmentId");
    console.log("appointmentDate: " + appointmentDate);
    console.log("doctorName: " + doctorName);
    console.log("appointmentId: " + appointmentId);

    useEffect(()=>{
        axios.get(`http://localhost:8080/allAppointments/${userId}`,{
            headers : {Authorization: 'Bearer '+token}
        }).then(response =>{
            setErrorMessage('');
            setAppointments(response.data);
            console.log("daa "+response.data);
        }).catch(error=>{
            if(error.response.data.errors){
                setErrorMessage(Object.values(error.response.data.errors).join(' '));
            } else{
                setErrorMessage("failed to connect to api");
            }
        }) 
    }, [])  

    let handleCancel = (appointmentId) =>{
        axios.delete(`http://localhost:8080/appointments/${appointmentId}`,{
            headers : {Authorization: 'Bearer '+token}
        }).then(response =>{
            setErrorMessage('');
            alert("Appointment cancelled successfully");
            setAppointments(appointments.filter(appointment => appointment.id !== appointmentId));
        }).catch(error=>{
            if(error.response.data.errors){
                setErrorMessage(Object.values(error.response.data.errors).join(' '));
            } else{
                setErrorMessage("failed to connect to api");
            }
        })
    }
    let upComingDate = appointments.filter(appointment => new Date(appointment.appointmentDate) >= new Date());
    let pastDate = appointments.filter(appointment => new Date(appointment.appointmentDate) < new Date());

    return(
        <div>
            <Navbar/>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">

                        <div className="card shadow-sm border-primary">
                            <div className="card-header bg-primary text-white fw-bold" style={{textAlign:'center'}}>
                                My Appointments
                            </div>
                            {errorMessage?<div className = "alert alert-danger">{errorMessage}</div>:''}
                            <div className="card-body p-0">
                                <div className="card-header bg-success text-white fw-bold">
                                Upcoming
                            </div>
                                <table className="table table-hover mb-0">
                                    <thead className="table-primary">
                                        <tr>
                                            <th>Doctor</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    {upComingDate.length>0?(upComingDate.map(appointment => (
                                <tr key={appointment.id}>
                                    <td>{appointment.doctors?.doctorName}</td>
                                    <td>{appointment.appointmentDate}</td>
                                    <td>
                                        <button onClick={() => handleCancel(appointment.id)} className="btn btn-danger btn-sm">Cancel</button>
                                    </td>
                                </tr>
                            ))):<div className="alert alert-info m-3">No upcoming appointments</div>}
                                </table>

                            </div>
                             <div className="card-body p-0">
                                <div className="card-header bg-secondary text-white fw-bold">
                                Past
                            </div>
                                <table className="table table-hover mb-0">
                                    <thead className="table-primary">
                                        <tr>
                                            <th>Doctor</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    {pastDate.length>0?(pastDate.map(appointment => (
                                <tr key={appointment.id}>
                                    <td>{appointment.doctors?.doctorName}</td>
                                    <td>{appointment.appointmentDate}</td>
                                </tr>
                            ))):<div className="alert alert-info m-3">No past appointments</div>}
                                   
                                </table>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAppointment;
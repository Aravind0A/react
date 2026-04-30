import Navbar from "./Navbar";
import image from "../images/doc1.jpg"
import { useNavigate } from "react-router-dom";

function DoctorList(){
    let navigate = useNavigate();
    let handleSubmit = ()=>{
        navigate("/bookAppointment");
    }
    return(
        <div>
            <Navbar/>
            <h3 style={{textAlign: "center", marginTop: "20px"}}>Doctors</h3>
            <div className="container mt-4">
                <div className="row justify-content-center g-4">

                    <div className="col-md-4">
                        <div className="card border-primary shadow-sm">
                            <div className="card-header bg-primary text-white fw-bold">
                                Doc1
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">3 years experience</h5>
                                <p className="card-text text-muted">Surgeon</p>
                                <button onClick={handleSubmit} className="btn btn-primary w-100">Book</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card border-primary shadow-sm">
                            <div className="card-header bg-primary text-white fw-bold">
                                Doc2
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">5 years experience</h5>
                                <p className="card-text text-muted">Physiotherapist</p>
                                <button onClick={handleSubmit} className="btn btn-primary w-100">Book</button>
                            </div>
                        </div>
                    </div>

                     <div className="col-md-4">
                        <div className="card border-primary shadow-sm">
                            <div className="card-header bg-primary text-white fw-bold">
                                Doc3
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">10 years experience</h5>
                                <p className="card-text text-muted">Cardiologist</p>
                                <button onClick={handleSubmit} className="btn btn-primary w-100">Book</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DoctorList;


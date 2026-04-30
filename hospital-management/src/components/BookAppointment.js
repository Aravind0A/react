import Navbar from "./Navbar";

function BookAppointment(){
    let handleSubmit = ()=>{
        alert("Successfully booked")
        console.log("ssds")
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
                            <div className="card-body">

                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Date of Appointment</label>
                                        <input type="date" className="form-control" id="doa" name="doa"/>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Time of Appointment</label>
                                        <input type="time" className="form-control" id="toa" name="toa"/>
                                    </div>

                                    <button onSubmit={handleSubmit} className="btn btn-primary w-100">
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

export default BookAppointment;
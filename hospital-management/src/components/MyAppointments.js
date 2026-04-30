import Navbar from "./Navbar";

function MyAppointment(){
    return(
        <div>
            <Navbar/>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">

                        <div className="card shadow-sm border-primary">
                            <div className="card-header bg-primary text-white fw-bold">
                                My Appointments
                            </div>
                            <div className="card-body p-0">

                                <table className="table table-hover mb-0">
                                    <thead className="table-primary">
                                        <tr>
                                            <th>Doctor</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>A</td>
                                            <td>14/12/2025</td>
                                            <td>
                                                <button className="btn btn-danger btn-sm">Cancel</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>B</td>
                                            <td>12/12/2026</td>
                                            <td>
                                                <button className="btn btn-danger btn-sm">Cancel</button>
                                            </td>
                                        </tr>
                                    </tbody>
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
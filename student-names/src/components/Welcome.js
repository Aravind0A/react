import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Welcome(){
    let student = useParams();
    return(
        <div>
            <p>Welcome {student.names}</p>

        </div>
    );
}

export default Welcome;
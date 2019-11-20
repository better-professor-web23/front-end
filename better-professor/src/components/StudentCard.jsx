import React from "react";
import {Link} from "react-router-dom";

const StudentCard = props => {

    return (
        <div className="student-card">
            <h2>Student</h2>
            <div>
                <Link to={`/assignments/${props.id}`}>Name: {props.student_name}</Link>
                <p>Major: {props.major}</p>
            </div>

        </div>    


    );
};

export default StudentCard;
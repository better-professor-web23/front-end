import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

import axiosWithAuth from "../utils/axiosWithAuth";

const StudentCard = props => {

    console.log('testing out props')

    // const [erase, setErase] = useState({});

    const id = props.id;

    const deleteStudent = () => {
    axiosWithAuth()
    .delete(`https://better-professor-back-end.herokuapp.com/students/${id}`)
    .then(res => {
        console.log('deleted student', res);
    })
    .catch(err => console.log(err.response));
    }

    // useEffect(() => {
    //     axiosWithAuth()
    //        .get(`https://better-professor-back-end.herokuapp.com/students/user/${id}`)
    //        .then(re => {
    //           console.log(re)
    //           setErase(re.data)
    //        })
    //  }, [])

    return (
        <div className="student-card">
            <h3>{props.student_name}</h3>
            <p>Major: {props.major}</p>
            <Link to ={`/assignments/${props.id}`}>
                <button>View Student Assignments</button>
            </Link>
            <button>Edit</button>
            <button onClick={deleteStudent}>Delete</button>

        </div>    


    );
};

export default StudentCard;
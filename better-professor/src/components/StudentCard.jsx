import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

import axiosWithAuth from "../utils/axiosWithAuth";

const StudentCard = props => {

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
            <h2>Student</h2>
            <div>
                <Link to={`/assignments/${props.id}`}>Name: {props.student_name}</Link>
                <p>Major: {props.major}</p>
            </div>
            <button>Edit</button>
            <button onClick={deleteStudent}>Delete</button>

        </div>    


    );
};

export default StudentCard;
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";

const Button = styled.button`
    width: 3rem;
    margin: 2% auto;
    color: white;
    background-color: blue;
    font-size: 0.7rem;
    text-decoration: none;
`;




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

    const EditStudent = () => {
        console.log('by god', props)
        props.history.push(`/editstudent/${id}`)
    }


    return (
        <div className="student-card">
            <h2>Student</h2>
            <div>
                <Link to={`/assignments/${props.id}`}>Name: {props.student_name}</Link>
                <p>Major: {props.major}</p>
            </div>
            <Button>Edit</Button>
            <Button onClick={deleteStudent}>Delete</Button>

        </div>    


    );
};

export default StudentCard;
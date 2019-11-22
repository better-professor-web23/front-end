import React, {useContext} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";
import { connect } from 'react-redux'

import {deleteStudent} from "../actions/"


// import {StudentContext} from "../contexts/StudentContext"

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
        props.deleteStudent(id)
        props.history.push('/')
    }


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
            <Button onClick={EditStudent}>Edit</Button>
            <Button onClick={deleteStudent}>Delete</Button>

        </div>


    );
};

export default connect( state => {
    return {
        students: state.students,
        isFetching: state.isFetching,
        error: state.assignments
    }
 }, {deleteStudent}) (StudentCard);
 


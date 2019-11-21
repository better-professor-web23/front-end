import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";

const Create = styled.div`
   display: flex;
   border: 0.8rem solid #5DADE2;
   background-color: #E9F7EF;
   width: 17rem;
   padding: 1rem 0;
   margin:0 20rem;
   text-decoration: none;
`;

const CreateDets = styled.form`
  display:flex;
  justify-content: center; 
  flex-direction: column;
  align-items: center;
  margin:0 2.7rem;
`;


const CreateStudentForm = (props) => {
    const userId = localStorage.getItem('id')
    const [add, setAdd] = useState({
        student_name: '',
        major: '',
        user_id: userId
    })
    const handleChange = event => {
        setAdd({ ...add, [event.target.name]: event.target.value })
    }
    const submitForm = event => {
        event.preventDefault();
        axiosWithAuth()
            .post(`https://better-professor-back-end.herokuapp.com/students/`, add)
            .then(response => {
                console.log('response after adding student', response.data);

            })
    }
    return (
        <Create>
            <CreateDets onSubmit={submitForm}>
                <input
                    type="text"
                    name="student_name"
                    placeholder="Enter Student Name"
                    value={add.student_name}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name="major"
                    placeholder="Enter Student Major (optional)"
                    value={add.major}
                    onChange={handleChange}
                />
                <button type="submit">Create Student</button>
            </CreateDets>
        </Create>
    )
}
export default CreateStudentForm;
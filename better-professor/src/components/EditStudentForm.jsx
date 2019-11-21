import React, { useState } from "react";

import axiosWithAuth from "../utils/axiosWithAuth"

const EditStudentForm = (props) => {
    console.log('what is being passed to editstudentform', props);
    const id = props.match.params.id;
    const [edit, setEdit] = useState({
        student_name: '',
        major: '',
        id: id
     })


     const handleChange = event => {
        setEdit({ ...edit, [event.target.name]: event.target.value })
     }

     const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
           .put(`https://better-professor-back-end.herokuapp.com/students/${id}`, edit)
           .then(response => {
              console.log('response after adding student', response.data);
           })
           .catch(err => {
            console.log("SignUp Login Catch Error: ", err.response.data.message);
            alert(err.response.data.message);
          });
     }

    return (
        <div>
            <h1 >Edit Student</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="student_name"
                placeholder="Enter New Student Name"
                onChange={handleChange}
                value={edit.student_name}
                />
                <input
                type="text"
                name="major"
                placeholder="Update Student Major"
                onChange={handleChange}
                value={edit.major}
                />
                <button type="submit">Edit Student</button>
            </form>
        </div>
    )
}


export default EditStudentForm;
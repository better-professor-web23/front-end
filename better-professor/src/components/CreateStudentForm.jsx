import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const CreateStudentForm = () => {
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
        <div>
            <form onSubmit={submitForm}>
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
            </form>
        </div>
    )
}
export default CreateStudentForm;
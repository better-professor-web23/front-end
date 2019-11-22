import React, { useState } from "react";

import axiosWithAuth from "../utils//axiosWithAuth";

const EditAssignmentForm = (props) => {
    const id = props.match.params.id
    const student_id = props.match.params.student_id
    console.log('edit form id', props.match)
    const [edit, setEdit] = useState({
        project_name: '',
        deadline: '',
        id: id
    })

    const handleChange = event => {
        setEdit({ ...edit, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
            .put(`https://better-professor-back-end.herokuapp.com/projects/${id}`, edit)
            .then(response => {
                console.log('response after adding student', response.data);
                props.history.push(`/assignments/${student_id}`)
            })
        console.log('edit', edit);
    }

    return (
        <div>
            <h1>Edit Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="project_name"
                    placeholder="assignment name"
                    onChange={handleChange}
                    value={edit.project_name}
                />
                <input
                    type='date'
                    name='deadline'
                    onChange={handleChange}
                    value={edit.deadline}
                />
                <button type="submit">Update Assignment</button>
            </form>
        </div>
    )
}

export default EditAssignmentForm;
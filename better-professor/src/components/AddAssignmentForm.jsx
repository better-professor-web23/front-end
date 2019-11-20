import React, { useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axiosWithAuth from "../utils/axiosWithAuth";

const Form = styled.form`
`

const Input = styled.input`
`

const InputWrapper = styled.div`
    max-width: 400px;
    margin: 0 auto;
    display:flex;
    flex-direction: column;
    border: 1px solid red;
`

const Label = styled.label`
    margin: 2% 0;
`

const SubmitButton = styled.button`
    width: 30%;
    margin: 2% auto;
    color: white;
    background-color: blue;
`

const AddAssignment = (props) => {

   const id = props.match.params.id
   const [add, setAdd] = useState({
      project_name: '',
      deadline: '',
      student_id: id
   })

   const handleChange = event => {
      setAdd({ ...add, [event.target.name]: event.target.value })
   }

   const handleSubmit = event => {
      event.preventDefault();
      axiosWithAuth()
         .post(`https://better-professor-back-end.herokuapp.com/projects/`, add)
         .then(response => {
            console.log('response after adding student', response.data);
         })
   }

   return (

      <Form onSubmit={handleSubmit}>
         <InputWrapper>
            <Label>Name of Assignment:
                <Input
                  type='text'
                  name='project_name'
                  placeholder='Project/Paper Name'
                  onChange={handleChange}
               />
            </Label>
            <Label>Deadline:
                    <Input
                  type='date'
                  name='deadline'
                  onChange={handleChange}
               />
            </Label>
            <SubmitButton type='submit'>Add Assignment</SubmitButton>

         </InputWrapper>
      </Form>

   )
}



export default AddAssignment
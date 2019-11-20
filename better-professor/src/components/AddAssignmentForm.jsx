import React, { useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axiosWithAuth from "../utils/axiosWithAuth";

import axiosWithAuth from "../utils/axiosWithAuth";


const AddAssignment = (props) => {

   const id = props.match.params.id
   const [add, setAdd] = useState({
      project_name: '',
<<<<<<< HEAD
      type: '',
      deadline: '',
      student_id: ''
=======
      deadline: '',
      student_id: id
>>>>>>> da690f42504d8c36e6142950c17d80a888a94828
   })

   const handleChange = event => {
      setAdd({ ...add, [event.target.name]: event.target.value })
   }

   const handleSubmit = event => {
      event.preventDefault();
      axiosWithAuth()
<<<<<<< HEAD
      .post(`https://better-professor-back-end.herokuapp.com/projects`, add)
      .then( response => {
          console.log('response after adding assignment', response.data);
      })
=======
         .post(`https://better-professor-back-end.herokuapp.com/projects/`, add)
         .then(response => {
            console.log('response after adding student', response.data);
         })
>>>>>>> da690f42504d8c36e6142950c17d80a888a94828
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
            <Label>
                    <Input
                  type='text'
                  name='student_id'
                  onChange={handleChange}
               />
            </Label>
            <SubmitButton type='submit'>Add Assignment</SubmitButton>

         </InputWrapper>
      </Form>

   )
}



export default AddAssignment

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
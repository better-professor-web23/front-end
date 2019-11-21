import React, { useState } from 'react';
import styled from 'styled-components'
import axiosWithAuth from "../utils/axiosWithAuth";
import * as yup from 'yup'

const Form = styled.form`
`

const Input = styled.input`
   width: 50%;
   margin: 0 auto;
   font-size: 1.5rem;
`

const InputWrapper = styled.div`
    max-width: 700px;
    margin: 15% auto;
    height: 20rem;
    display:flex;
    flex-direction: column;
    justify-items: center;
    border: 3px solid blue;
    border-radius: 2rem;
    padding: 2rem;

`

const Label = styled.label`
    margin: 2% auto;
    font-size: 2.5rem;
    width: 60%;
    text-align:center;
`

const SubmitButton = styled.button`
    width: 30%;
    margin: 2% auto;
    color: white;
    background-color: blue;
    font-size: 1.5rem;
`

const AddAssignment = (props) => {
   const id = props.match.params.id
   const [add, setAdd] = useState({
      project_name: '',
      deadline: '',
      student_id: id
   })
   console.log({ add })

   const validationSchema = yup.object().shape({
      project_name: yup.string().required('something'),
      deadline: yup.date().required('something'),
      student_id: yup.string().required('something')
   })


   const handleChange = event => {
      setAdd({ ...add, [event.target.name]: event.target.value })
   }

   const handleSubmit = event => {
      event.preventDefault();
      validationSchema.isValid(add)
         .then(valid => {
            if (valid) {
               axiosWithAuth()
                  .post(`https://better-professor-back-end.herokuapp.com/projects/`, add)
                  .then(response => {
                     console.log('response after adding assignment', response.data);
                     props.history.push(`/assignments/${id}`)
                  })
            } else {
               alert('Please fill out all fields')
            }

         })


   }

   return (

      <Form onSubmit={handleSubmit} key={id}>
         <InputWrapper>
            <Label htmlFor='project_name'>Name of Assignment:</Label>
            <Input
               type='text'
               name='project_name'
               placeholder='Project/Paper Name'
               onChange={handleChange}
            />
            <Label htmlFor='deadline'>Deadline: </Label>
            <Input
               type='date'
               name='deadline'
               onChange={handleChange}
               defaultValue="2019-11-21"
            />
            <SubmitButton type='submit'>Add Assignment</SubmitButton>
         </InputWrapper>
      </Form>

   )
}



export default AddAssignment
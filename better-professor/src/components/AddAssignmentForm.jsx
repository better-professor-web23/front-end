import React, { useState } from 'react';
import styled from 'styled-components'

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
   const [assignments, setAssignments] = useState([])
   console.log({ assignments })
   const [add, setAdd] = useState({
      name: '',
      type: '',
      dueDate: ''
   })
   console.log({ add })

   const handleChange = event => {
      setAdd({ ...add, [event.target.name]: event.target.value })
   }

   const handleSubmit = event => {
      event.preventDefault();
      setAssignments([...assignments, add])
   }


   return (

      <Form onSubmit={handleSubmit}>
         <InputWrapper>
            <Label>Name of Assignment:
                <Input
                  type='text'
                  name='name'
                  placeholder='Project/Paper Name'
                  onChange={handleChange}
               />
            </Label>
            <Label>Type of Assignment:
                <Input
                  as='select'
                  name='type'
                  onChange={handleChange}
               >
                  <option value='Project'>Project</option>
                  <option value='Research Paper'>Research Paper</option>
               </Input>
            </Label>
            <Label>Due Date:
                    <Input
                  type='date'
                  name='dueDate'
                  onChange={handleChange}
               />
            </Label>
            <SubmitButton type='submit'>Add Assignment</SubmitButton>
         </InputWrapper>

      </Form>

   )
}



export default AddAssignment
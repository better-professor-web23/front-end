import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth'

const CardsWrapperDiv = styled.div`

`

const AssignmentCardDiv = styled.div`

`

const AssignmentNameH2 = styled.h2`

`

const AssignmentDeadlineH3 = styled.h3`

`

const AssignmentList = (props) => {
   const [assignmentList, setAssignmentList] = useState([]);
   console.log({ assignmentList })
   console.log({ props })
   useEffect(() => {
      const id = props.match.params.id
      axiosWithAuth()
         .get(`https://better-professor-back-end.herokuapp.com/projects/students/${id}`)
         .then(re => {
            console.log({ re })
            setAssignmentList([...assignmentList, ...re.data])
         })
         .catch(error => {
            console.log(error.message)
         })

   }, [props.match.params.id])

   return (
      <CardsWrapperDiv>Assignments List
         {assignmentList.map(item => {
         return (
            <AssignmentCardDiv key={item.id}>
               <AssignmentNameH2>{item.project_name}</AssignmentNameH2>
               <AssignmentDeadlineH3>Deadline: {item.deadline}</AssignmentDeadlineH3>
            </AssignmentCardDiv>
         )
      })}
      </CardsWrapperDiv>
   )
}

export default AssignmentList
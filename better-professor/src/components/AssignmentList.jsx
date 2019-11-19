import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'

const CardsWrapperDiv = styled.div`

`

const AssignmentCardDiv = styled.div`

`

const AssignmentNameH2 = styled.h2`

`

const AssignmentDeadlineH3 = styled.h3`

`

const AssignmentList = () => {
   const [assignmentlist, setAssignmentList] = useState([]);
   console.log({ assignmentlist })
   useEffect(() => {
      axios.get('https://better-professor-back-end.herokuapp.com/')
         .then(re => {
            console.log({ re })
            setAssignmentList([...assignmentlist, re.data])
         })

   }, [])

   return (
      <CardsWrapperDiv>Assignments List
         {assignmentlist.map((item, index) => {
         return (
            <AssignmentCardDiv key={index}>
               {item}
            </AssignmentCardDiv>
         )
      })}
      </CardsWrapperDiv>
   )
}

export default AssignmentList
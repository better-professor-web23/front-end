import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
// import {fetchAssignments} from "../actions" 

const CardsWrapperDiv = styled.div`
   max-width: 1200px;
   width: 100%;
   margin: 0 auto;
   display:flex;
   flex-wrap:wrap;
   justify-content: space-evenly;
   
`

const Title = styled.h1`
   width: 100%;
   text-align:center;
`;

const AssignmentCardDiv = styled.div`
   width: 45%;
   border: 2px solid blue;
   border-radius: 1rem;
   margin: 2% 0;
   display:flex;
   flex-wrap:wrap;
   padding: 2%;
`

const AssignmentNameH2 = styled.h2`
   width: 100%;
`

const AssignmentDeadlineH3 = styled.h3`
   width: 100%;
`
const Button = styled.button`
   width: 30%;
   margin: 2% auto;
   color: white;
   background-color: blue;
   font-size: 1.2rem;
   border-radius: 1rem;
`;

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

   const sendMessage = () => {
      const id = props.match.params.id
      props.history.push(`/message/${id}`)

   }

   //    const Assignment = (props) => {
   //       const id = props.match.params.id
   //       return (
   //           <div>
   //               <Link to={`/addassignment/${id}`}>Add Assignment</Link>
   //               <AssignmentList {...props} />
   //           </div>
   //       )
   //   }



   // const deleteAssignment = () => {
   //    // const idErase = response.data.id
   //    console.log('response data id',props.match.params);
   //    axiosWithAuth()
   //    .delete(`https://better-professor-back-end.herokuapp.com/projects/${idErase}`)
   //    .then(res => console.log("erased assignment", res))
   //    .catch(err => console.log(err.response));
   // }


   return (
      <CardsWrapperDiv>
         <Title>Assignments</Title>
         {assignmentList.map(item => {
            return (
               <AssignmentCardDiv key={item.id}>
                  <AssignmentNameH2>{item.project_name}</AssignmentNameH2>
                  <AssignmentDeadlineH3>Deadline: {item.deadline}</AssignmentDeadlineH3>
                  <Button>Edit </Button>
                  <Button >Delete </Button>
                  <Button onClick={sendMessage}>Send Message</Button>
               </AssignmentCardDiv>
            )
         })}
      </CardsWrapperDiv>
   )
}

export default AssignmentList;

// const mapStateToProps = state => {
//    return {
//       assignments: state.assignments,
//       isFetching: state.isFetching
//    }
// }


// export default connect(
//    mapStateToProps,
//    {fetchAssignments}

// )(AssignmentList)


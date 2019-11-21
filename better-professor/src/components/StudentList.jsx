import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import StudentCard from "./StudentCard"
import MessageForm from "./MessageForm";
import styled from "styled-components";

const Stu = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   margin: 3rem;
   max-width: 73rem;
`;

const EachStu = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   border: 0.8rem solid #5DADE2;
   background-color: #E9F7EF;
   width: 13rem;
   padding: 1rem 0;
   margin: 1rem 0;
   
`;




const StudentList = (props) => {
   const [students, setStudents] = useState([])
   console.log('lets see if this shows', props)

   useEffect(() => {
      const id = localStorage.getItem('id')
      axiosWithAuth()
         .get(`https://better-professor-back-end.herokuapp.com/students/user/${id}`)
         .then(re => {
            console.log(re)
            setStudents(re.data)
         })
   }, [])
   return (
      <Stu>
         {students.map(student => {
            return (

               <EachStu>
                  <StudentCard {...student} />
               </EachStu>

            )
         })}
      </Stu>
   )
}

export default StudentList

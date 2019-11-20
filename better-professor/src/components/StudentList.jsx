import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import Reminders from "../pages/Reminders";


import StudentCard from "./StudentCard"

const StudentList = (props) => {
   const [students, setStudents] = useState([])
   console.log({ props })


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
      <div>{students.map((student, index) => {
         return (
            <div key={index}>
            <StudentCard key={student.student_name} {...student} />
            <Reminders key={student.id} {...student}/>
            </div>
         )
      })}
      </div>
   )
}

export default StudentList
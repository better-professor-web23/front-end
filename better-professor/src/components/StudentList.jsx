import React, { useState, useEffect } from 'react';
import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom'
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
   }, [props.match.params.id])
   return (
      <div>{students.map(student => {
         return (
            <div>
               <StudentCard {...student} />
            </div>

         )
      })}
      </div>
   )
}

export default StudentList
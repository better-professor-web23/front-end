import React, { useState, useEffect } from 'react';
import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom'


const StudentList = (props) => {
   const [students, setStudents] = useState([])
   const id  = props.match.params.id

const id = props.match.params.id
const [erase, setErase] = useState({

   student_id: id
})

   const []
   console.log( 'lets test this', props )
   useEffect(() => {
      const id = localStorage.getItem('id')
      axiosWithAuth()
         .get(`https://better-professor-back-end.herokuapp.com/students/user/${id}`)
         .then(re => {
            console.log(re)
            setStudents(re.data)
         })
   }, [props.match.params.id])

   const deleteStudent = () => {
      const id = localStorage.getItem('id')
      axiosWithAuth()
      .delete(`https://better-professor-back-end.herokuapp.com/students/${id}`)
      .then ( response => {
         console.log('erased student', response)
      })
      .catch(err => console.log(err.response));
   }
   return (
      <div>{students.map(student => {
         return (
            <div>
               <Link to={`/assignments/${student.id}`}>
                  <div>
                     {student.student_name}
      
                  </div>
               </Link>
               <button>Edit</button>
               <button onClick={deleteStudent}>Delete</button>
            </div>
         )
      })}
      </div>
   )
}
export default StudentList
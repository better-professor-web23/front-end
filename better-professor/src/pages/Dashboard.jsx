import React from "react";
import StudentList from '../components/StudentList.jsx'
import { Link } from 'react-router-dom'

const Dashboard = (props) => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Link to='/createstudent'>Add A Student</Link>
            <StudentList {...props} />
        </div>
    )
}

export default Dashboard;
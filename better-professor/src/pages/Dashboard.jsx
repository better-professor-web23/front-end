import React from "react";
import StudentList from '../components/StudentList.jsx'

const Dashboard = (props) => {
    return (
        <div>
            <h1>Dashboard</h1>
            <StudentList {...props} />
        </div>
    )
}

export default Dashboard;
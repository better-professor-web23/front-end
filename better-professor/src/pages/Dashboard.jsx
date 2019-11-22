import React from "react";
import StudentList from '../components/StudentList.jsx'
import { Link } from 'react-router-dom'
import styled from "styled-components";

const Page = styled.div`
    background-color: #E5E8E8;
    height:100vh; 
    margin-top: -1.3rem ;

`;
const DashAndStu = styled.div`
    margin-left: 3rem;
    margin-top: 1rem;
`;

const Dashboard = (props) => {
    console.log('pls help irl :/', props)
    return (
        <Page>
            <DashAndStu>
                <h1>Dashboard</h1>
                <Link to='/createstudent'>Add Student</Link>
            </DashAndStu>
            <StudentList {...props} />
        </Page>
    )
}

export default Dashboard;


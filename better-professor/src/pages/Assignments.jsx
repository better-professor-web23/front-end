import React from "react";
import AssignmentList from '../components/AssignmentList';
import { Link } from 'react-router-dom'


const Assignment = (props) => {
    const id = props.match.params.id
    return (
        <div>
            <Link to={`/addassignment/${id}`}>Add Assignment</Link>
            <AssignmentList {...props} />
        </div>
    )
}

export default Assignment; 



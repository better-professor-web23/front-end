import React from "react";
import AssignmentList from '../components/AssignmentList';
import { Link } from 'react-router-dom'
import Reminders from './Reminders'

const Assignment = (props) => {
    const id = props.match.params.id
    console.log('assignment', props)
    return (
        <div>
            <Link to={`/addassignment/${id}`}>Add Assignment</Link>
            <AssignmentList {...props} />
            <Reminders {...props} />
        </div>
    )
}

export default Assignment;



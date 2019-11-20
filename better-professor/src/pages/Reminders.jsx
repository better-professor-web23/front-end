import React from "react";
import ReminderList from "../components/ReminderList";

const Reminders = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Reminders</h1>
            <ReminderList {...props}/>
            
        </div>
    )
}

export default Reminders;
import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth"


const ReminderList = (props) => {

    const [reminders, setReminders] = useState([])
    console.log('reminderlist', props)
    const id = props.match.params.id
    useEffect(() => {

        axiosWithAuth()
            .get(`https://better-professor-back-end.herokuapp.com/messages/students/${id}`)
            .then(res => {
                console.log(res);
                setReminders([...reminders, ...res.data])
            })

    }, [id])

    return (
        <div>
            {reminders.map(reminder => {
                return (
                    <p>{reminder.message}</p>
                );

            })}

        </div>
    )
};

export default ReminderList;
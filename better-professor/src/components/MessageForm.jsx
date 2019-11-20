import React, {useState} from "react";

import axiosWithAuth from "../utils/axiosWithAuth";

const MessageForm = (props) => {
    console.log('whats coming through to messages?', props);
    const id = props.id;

    const [message, setMessage] = useState({
        message: '', 
        date: '',
        student_id: id
    })

//
   const handleChange = event => {
    setMessage({ ...message, [event.target.name]: event.target.value })
 }

 const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
       .post(`https://better-professor-back-end.herokuapp.com/messages`, message)
       .then(response => {
          console.log('response after adding student', response.data);
       })
       .catch(err => console.log( err.response));
 }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                type="text"
                name="message"
                placeholder='enter your message here'
                value={message.message}
                onChange={handleChange}
                />
                <input
                type="date"
                name="date"
                placeholder="choose date"
                value={message.date}
                onChange={handleChange}
                />
                <button type="submit">Send Message</button>
            </form>
        </div>
    )
}

export default MessageForm;

import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth"

const SignupForm= (props) => {
console.log('propspropsprops', props)
  const [signup, setSignup ] = useState({
    "username": '',
    "password": '',
    "first_name": '',
    "last_name": ''
})

const handleChange = event => {
  setSignup({...signup, [event.target.name]:event.target.value})
}

const handleSubmit = event => {
  console.log('pero yo no se', signup);
  event.preventDefault();
  axiosWithAuth()
  .post('https://better-professor-back-end.herokuapp.com/users/register', signup)
  .then( response => {
    console.log('response from post', response.data);
    localStorage.setItem('token', response.data.token)
    setSignup({...signup})
    props.history.push('/login');
  })

}

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
          type="text"
          name="username"
          placeholder="create username"
          value={signup.username}
          onChange={handleChange}
          />
          <input
          type="password"
          name="password"
          placeholder="create password"
          value={signup.password}
          onChange={handleChange}
          />
            <input
          type="text"
          name="first_name"
          placeholder="enter first name"
          value={signup.first_name}
          onChange={handleChange}
          />
        <input
          type="text"
          name="last_name"
          placeholder="enter last name"
          value={signup.last_name}
          onChange={handleChange}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
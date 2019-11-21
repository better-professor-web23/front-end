import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";


const Login = styled.div`
   display: block;
   border: 0.8rem solid #5DADE2;
   background-color: #E9F7EF;
   width: 15rem;
   padding: 1rem 0;
   margin:0 20rem;
   text-decoration: none;
`;

const LoginForm = (props) => {

  const [login, setLogin] = useState({
    username: '',
    password: '',
    isLoggedIn: false
  })

  const handleChange = event => {
    setLogin({ ...login, [event.target.name]: event.target.value })
  }


  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post('https://better-professor-back-end.herokuapp.com/users/login', login)
      .then(response => {
        console.log('response from post', response.data);
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('id', response.data.id)
        setLogin({ ...login, isLoggedIn: true })
        props.history.push('/');
      })

  }

  return (
    <>
      <Login>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={login.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={login.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </Login>
    </>
  );
};

export default LoginForm;


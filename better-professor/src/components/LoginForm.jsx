import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";

const LoginButton = styled.button`
width: 4rem;
margin: 2% auto;
color: white;
background-color: blue;
font-size: 1rem;
margin: .7rem;
`;

const Login = styled.div`
   display: flex;
   border: 0.8rem solid #5DADE2;
   background-color: #E9F7EF;
   width: 15rem;
   padding: 1rem 0;
   margin:0 20rem;
   margin-top: 2rem;
   text-decoration: none;
`;

const FormDetails = styled.form`
  display:flex;
  justify-content: center; 
  flex-direction: column;
  align-items: center;
  margin:0 2.7rem;
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
        <FormDetails onSubmit={handleSubmit}>
        <p>Username</p>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={login.username}
            onChange={handleChange}
          />
          <p>Password</p>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={login.password}
            onChange={handleChange}
          />
          <LoginButton type="submit">Login</LoginButton>
        </FormDetails>
      </Login>
    </>
  );
};

export default LoginForm;


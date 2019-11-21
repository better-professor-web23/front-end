import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import styled from "styled-components";






const SignUpform = styled.div`

display: flex;
border: 0.8rem solid #5DADE2;
background-color: #E9F7EF;
width: 18rem;
height: 25rem;
padding: 1rem 0;
margin:0 20rem;
text-decoration: none;

`;


const SignUpButton = styled.button`
width: 6rem;
margin: 2% auto;
color: white;
background-color: blue;
font-size: 1rem;
margin: .7rem auto;
`;

const FormDets = styled(Form)`
  display:flex;
  justify-content: center; 
  flex-direction: column;
  align-items: center;
  margin:0 4rem;
`;




const SignupForm = ({ values, errors, touched, status }) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        status && setUser(users => [...users, status]);
    }, [status]);


    return (

        <SignUpform className="user-form">
            <FormDets>
                <p>Username</p>
                <Field type="text" name="username" placeholder="username" />
                {touched.username && errors.username && (
                    <p className="errors"> {errors.username}</p>
                )}
                <p>Password</p>
                <Field type="password" name="password" placeholder="password" />
                {touched.password && errors.password && (
                    <p className="errors"> {errors.password}</p>
                )}
                <p>First Name</p>
                <Field type="text" name="first_name" placeholder="first name" />
                {touched.first_name && errors.first_name && (
                    <p className="errors"> {errors.first_name}</p>
                )}
                <p>Last Name</p>
                <Field type="text" name="last_name" placeholder="last name" />
                {touched.last_name && errors.last_name && (
                    <p className="errors"> {errors.last_name}</p>
                )}

                <SignUpButton type='submit'>Sign Up</SignUpButton>
            </FormDets>
            {user.map(user => (
                <ul key={user.id}>
                    <li>Username: {user.username}</li>
                    <li>Password: {user.password}</li>
                    <li>First Name: {user.first_name}</li>
                    <li>Last Name: {user.last_name}</li>
                </ul>
            ))}
        </SignUpform>
    );
};

const FormikUserForm = withFormik({
    mapPropsToValues({ username, password, first_name, last_name }) {
        return {
            username: username || "",
            password: password || "",
            first_name: first_name || "",
            last_name: last_name || ""

        };
    },
    validationSchema: yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required(),
        first_name: yup.string().required(),
        last_name: yup.string().required()
    }),
    handleSubmit(values, { setStatus, props }) {
        axios
            .post("https://better-professor-back-end.herokuapp.com/users/register", values)
            .then(response => {
                console.log('signup response', response);
                setStatus(response.data);
                props.history.push("/login")

            })
            .catch(err => console.log(err.response));
    }


})(SignupForm);

export default FormikUserForm;

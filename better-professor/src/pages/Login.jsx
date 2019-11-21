import React from "react";
import LoginForm from "../components/LoginForm";
import styled from "styled-components";

const LoginSection = styled.div`
background-color: #E5E8E8;
height:100vh; 
margin-top: -1.3rem ;
`;

const H1= styled.h1`
    margin-left: 3rem ;
    
`;

const Login = (props) => {
    return (
        <LoginSection>
            <H1>Login</H1>
            <LoginForm
            history={props.history}
            />
        </LoginSection>
    )
}

export default Login;
import React from "react";
import SignupForm from "../components/SignupForm";
import styled from "styled-components";

const SignupSection = styled.div`
background-color: #E5E8E8;
height:100vh; 
margin-top: -1.3rem ;
`;

const H= styled.h1`
    margin-left: 3rem ;
    
`;

const Signup = (props) => {
    return (
        <SignupSection >
            <H>Sign Up </H>
           <SignupForm
           history={props.history}
           />
        </SignupSection >
    )
}

export default Signup;
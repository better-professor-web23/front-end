import React from "react";

import SignupForm from "../components/SignupForm";
const Signup = (props) => {
    return (
        <div>
            <h1>Sign Up </h1>
           <SignupForm
           history={props.history}
           />
        </div>
    )
}

export default Signup;
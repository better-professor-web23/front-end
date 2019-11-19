import React from "react";

import LoginForm from "../components/LoginForm";

const Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm
            history={props.history}
            />
        </div>
    )
}

export default Login;
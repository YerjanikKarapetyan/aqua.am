import React, { useState } from "react";
import './Login.css';

const Login = () => {
    const [inpLogin, setInpLogin] = useState('');
    const InputChange = (eventChange) =>setInpLogin(eventChange.target.value)

    return(
        <span>
            <input value={inpLogin} onChange = {InputChange}/>
        </span>
    )
}

export default Login;
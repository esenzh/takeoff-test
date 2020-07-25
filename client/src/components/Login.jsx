import React, { useState } from 'react';
import LoginButton from './Button';
import { useHistory } from 'react-router-dom';

function Login() {
    const [email, setEmailInput] = useState('');
    const [password, setPasswordInput] = useState('');

    const history = useHistory();

    const handleOnChange = event => {
        event.target.name === 'email'
            ? setEmailInput(event.target.value)
            : setPasswordInput(event.target.value)
    }

    const handleLogin = async event => {
        event.preventDefault();
        const response = await fetch('/api/auth/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })
        const result = await response.json();
        if (result.message === 'Access granted') {
            history.push('/')
        } else {
            alert(result.message)
        }
    }

    return (
        <form onSubmit={handleLogin}>
            <label htmlFor="GET-email">Email</label>
            <input id='GET-email' type="email" name='email' onChange={handleOnChange} required />

            <label htmlFor="GET-password">Password</label>
            <input id='GET-password' type="password" name='password' onChange={handleOnChange} required />
            <LoginButton title={'Login'} />
        </form>
    )
}



export default Login;
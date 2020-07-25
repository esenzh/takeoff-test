import React, { useState } from 'react';
import LoginButton from './Button';

function Login() {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const handleOnChange = event => {
        event.target.name === 'email'
            ? setEmailInput(event.target.value)
            : setPasswordInput(event.target.value)
    }
    return (
        <form >
            <label htmlFor="GET-email">Email</label>
            <input id='GET-email' type="email" name='email' onChange={handleOnChange} required />

            <label htmlFor="GET-password">Password</label>
            <input id='GET-password' type="password" name='password' onChange={handleOnChange} required />
            <LoginButton title={'Login'} />
        </form>
    )
}



export default Login;
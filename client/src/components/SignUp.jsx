import React, { useState } from 'react';
import SignUpButton from './Button';
import { useHistory } from 'react-router-dom';

function SignUp() {
    const [name, setNameInput] = useState('');
    const [email, setEmailInput] = useState('');
    const [password, setPasswordInput] = useState('');

    const history = useHistory();

    const handleOnChange = event => {
        if (event.target.name === 'name') {
            setNameInput(event.target.value)
        } else if (event.target.name === 'email') {
            setEmailInput(event.target.value)
        } else {
            setPasswordInput(event.target.value)
        }
    }

    const handleSignUp = async event => {
        event.preventDefault();
        const response = await fetch('/api/auth/signup', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        })
        const result = await response.json();
        if (result.message === 'User created') {
            history.push('/')
        } else {
            alert(result.message);
        }
    }

    return (
        <form onSubmit={handleSignUp}>
            <label htmlFor="GET-name">Name</label>
            <input id='GET-name' type="text" name='name' onChange={handleOnChange} required />

            <label htmlFor="GET-email">Email</label>
            <input id='GET-email' type="email" name='email' onChange={handleOnChange} required />

            <label htmlFor="GET-password">Password</label>
            <input id='GET-password' type="password" name='password' onChange={handleOnChange} required />
            <SignUpButton title={'Sign Up'} />
        </form>
    )
}

export default SignUp;
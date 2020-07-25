import React, { useState } from 'react';
import SignUpButton from './Button';

function SignUp() {
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const handleOnChange = event => {
        if (event.target.name === 'name') {
            setNameInput(event.target.value)
        } else if (event.target.name === 'email') {
            setEmailInput(event.target.value)
        } else {
            setPasswordInput(event.target.value)
        }
    }

    return (
        <form >
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
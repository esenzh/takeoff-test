import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import SignUpButton from '../Button';

function SignUp(props) {
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
            props.cookies.set("isLoggedin", true)
            history.push('/')
        } else {
            alert(result.message);
        }
    }

    return (
        <div className="signup-card">
            <form onSubmit={handleSignUp} className="signup-form">
                <div>
                    <h2>Sign up</h2>
                </div>
                <div>
                    <label htmlFor="GET-name" className="signup-form__name">Name</label>
                    <input id='GET-name' type="text" name='name' className="signup-form__input" onChange={handleOnChange} required />
                </div>
                <div>
                    <label htmlFor="GET-email" className="signup-form__email">Email</label>
                    <input id='GET-email' type="email" name='email' className="signup-form__input" onChange={handleOnChange} required />
                </div>
                <div>
                    <label htmlFor="GET-password" className="signup-form__password">Password</label>
                    <input id='GET-password' type="password" name='password' className="signup-form__input" onChange={handleOnChange} required />
                </div>
                <SignUpButton title={'Sign Up'} />
                <br />
                <span>You have an account? Then <a href={'/login'}>login</a></span>
                <br />
            </form>
        </div>
    )
}

export default withCookies(SignUp);
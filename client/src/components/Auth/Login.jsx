import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import LoginButton from '../Button';

function Login(props) {
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
            props.cookies.set("isLoggedin", true)
            history.push('/')
        } else {
            alert(result.message)
        }
    }

    return (
        <div className='login-card'>
            <form onSubmit={handleLogin} className="login-form">
                <div>
                    <h2>Login</h2>
                </div>
                <div>
                    <label htmlFor="GET-email" className="login-form__email">Email</label>
                    <input id='GET-email' type="email" name='email' className="login-form__input" onChange={handleOnChange} required />
                </div>
                <div>
                    <label htmlFor="GET-password" className="login-form__password">Password</label>
                    <input id='GET-password' type="password" name='password' className="login-form__input" onChange={handleOnChange} required />
                </div>
                <LoginButton title={'Login'} />
                <br />
                <span>You don't have an account? Then <a href={'/signup'}>sign up</a></span>
            </form>
        </div>
    )
}

export default withCookies(Login);
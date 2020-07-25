import React, { useState } from 'react';
import AddButton from '../Button';

function AddContact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleOnChange = event => {
        if (event.target.name === 'name') {
            setName(event.target.value)
        } else if (event.target.name === 'email') {
            setEmail(event.target.value)
        } else {
            setPhone(event.target.value)
        }
    }

    return (
        <form onSubmit={handleLogin}>
            <label htmlFor="GET-name">Name</label>
            <input id='GET-name' type="text" name='name' onChange={handleOnChange} required />

            <label htmlFor="GET-email">Email</label>
            <input id='GET-email' type="email" name='email' onChange={handleOnChange} required />

            <label htmlFor="GET-phone">Phone</label>
            <input id='GET-phone' type="text" name='phone' onChange={handleOnChange} required />
            <AddButton title={'Add Contact'} />
        </form>
    )
}

export default AddContact;
import React, { useState } from 'react';
import { connect } from "react-redux";
import AddButton from '../Button';
import { AddContactAC } from '../../redux/action';

function AddContact(props) {
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

    const handleAddContact = event => {
        event.preventDefault();
        props.addContact({ name, email, phone })
        setName('');
        setEmail('');
        setPhone('');
    }

    return (
        <form onSubmit={handleAddContact}>
            <label htmlFor="GET-name">Name</label>
            <input id='GET-name' type="text" name='name' value={name} onChange={handleOnChange} required />

            <label htmlFor="GET-email">Email</label>
            <input id='GET-email' type="email" name='email' value={email} onChange={handleOnChange} required />

            <label htmlFor="GET-phone">Phone</label>
            <input id='GET-phone' type="text" name='phone' value={phone} onChange={handleOnChange} required />
            <AddButton title={'Add Contact'} />
        </form>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        addContact: contact => {
            dispatch(AddContactAC(contact))
        }
    };
}

export default connect(null, mapDispatchToProps)(AddContact);
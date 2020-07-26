import React, { useState } from 'react';
import { connect } from "react-redux";
import AddButton from '../Button';
import Alert from '../Alert';
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
        <div>
            {props.alert && <Alert text={props.alert} />}
            <form onSubmit={handleAddContact} className='add-form'>
                <input className="add-form__input" type="text" name='name' value={name} placeholder='Name' onChange={handleOnChange} required />
                <input className="add-form__input" type="email" name='email' value={email} placeholder='Email' onChange={handleOnChange} required />
                <input className="add-form__input" type="text" name='phone' value={phone} placeholder='Phone' onChange={handleOnChange} required />
                <AddButton title={'Add Contact'} />
            </form>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        addContact: contact => {
            dispatch(AddContactAC(contact))
        }
    };
}

function mapStateToProps(store) {
    return {
        alert: store.errorAlert
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
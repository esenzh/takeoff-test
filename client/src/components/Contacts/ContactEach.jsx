import React, { useState } from 'react';
import { connect } from "react-redux";
import { DeleteContactAC, UpdateContactAC } from '../../redux/action';

function ContactEach(props) {

    const [isEdit, setisEdit] = useState(false);
    const [name, setName] = useState(props.contact.name);
    const [email, setEmail] = useState(props.contact.email);
    const [phone, setPhone] = useState(props.contact.phone);

    const handleOnChange = event => {
        if (event.target.name === 'name') {
            setName(event.target.value)
        } else if (event.target.name === 'email') {
            setEmail(event.target.value)
        } else {
            setPhone(event.target.value)
        }
    }

    const handleSave = contact => {
        props.updateContact(contact);
        setisEdit(false)
    }

    return (
        <tr>
            <td>
                {isEdit ? <input type='text' name="name" value={name} onChange={handleOnChange}></input> : props.contact.name}
            </td>
            <td>
                {isEdit ? <input type='email' name="email" value={email} onChange={handleOnChange}></input> : props.contact.email}
            </td>
            <td>
                {isEdit ? <input type='text' name="phone" value={phone} onChange={handleOnChange}></input> : props.contact.phone}
            </td>
            <td>
                {isEdit
                    ? <button className='contact-table__save-button' onClick={() => handleSave({ _id: props.contact._id, name, email, phone })}>Save</button>
                    : <button className='contact-table__edit-button' onClick={() => setisEdit(true)}>Edit</button>
                }
            </td>
            <td><button className='contact-table__delete-button' onClick={() => props.deleteContact(props.contact._id)}>Delete</button></td>
        </tr>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        deleteContact: (id) => {
            dispatch(DeleteContactAC(id))
        },
        updateContact: (contact) => {
            dispatch(UpdateContactAC(contact))
        }
    };
}

export default connect(null, mapDispatchToProps)(ContactEach);
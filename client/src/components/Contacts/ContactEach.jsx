import React from 'react';
import { connect } from "react-redux";
import { DeleteContactAC } from '../../redux/action';

function ContactEach(props) {

    return (
        <tr>
            <td>{props.contact.name}</td>
            <td>{props.contact.email}</td>
            <td>{props.contact.phone}</td>
            <td><button className='contact-table__edit-button'>Edit</button></td>
            <td><button className='contact-table__delete-button' onClick={() => props.deleteContact(props.contact._id)}>Delete</button></td>
        </tr>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        deleteContact: (id) => {
            dispatch(DeleteContactAC(id))
        }
    };
}

export default connect(null, mapDispatchToProps)(ContactEach);
import React from 'react';

function ContactEach(props) {
    return (
        <tr>
            <td>{props.contact.name}</td>
            <td>{props.contact.email}</td>
            <td>{props.contact.phone}</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
        </tr>
    )
}

export default ContactEach;
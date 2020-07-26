import React from 'react';
import ContactList from './ContactList';
import AddContact from '../Contacts/AddContact';

function Contact() {
    return (
        <div>
            <AddContact />
            <ContactList />
        </div>
    )
}

export default Contact;
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function ContactList() {
    const [contacts, setContacts] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/contacts', {
                method: "GET",
                headers: { "Content-Type": 'application/json' }
            })
            const result = await response.json();
            if (result.message === 'Unauthorized') {
                history.push('/login')
            }
        }
        fetchData()
    }, [])

    return (
        <h1>Contacts LIST</h1>
    )
}

export default ContactList;
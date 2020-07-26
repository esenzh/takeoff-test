import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import ContactList from './ContactList';
import AddContact from '../Contacts/AddContact';

function Contact(props) {

    const history = useHistory();

    useEffect(() => {
        if (!props.access) {
            history.push('/login')
        }
    }, [])

    const logout = async () => {
        const reponse = await fetch('/api/auth/logout', {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
        const result = await reponse.json();
        if (result.message === 'You logged out') {
            history.push('/login')
        } else {
            alert(result.message)
        }
    }
    return (
        <div className='container'>
            <br />
            <br />
            <button className='logout-button' onClick={logout}>Logout</button>
            <br />
            <br />
            <AddContact />
            <br />
            <br />
            <ContactList />
        </div>
    )
}

function mapStateToProps(store) {
    return {
        access: store.giveAccess
    }
}

export default connect(mapStateToProps, null)(Contact);
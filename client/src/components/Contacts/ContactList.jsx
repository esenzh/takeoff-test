import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import { FetchContactsAC } from '../../redux/action';

function ContactList(props) {
    const [contacts, setContacts] = useState([]);
    const history = useHistory();

    useEffect(() => {
        props.fetchContacts()
    }, [])
    return (
        <h1>Contact List</h1>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        fetchContacts: () => {
            dispatch(FetchContactsAC())
        }
    };
}

function mapStateToProps(store) {
    return {
        contactList: store.contactList
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
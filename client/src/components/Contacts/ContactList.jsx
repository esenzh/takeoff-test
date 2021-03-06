import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { FetchContactsAC } from '../../redux/action';
import ContactEach from './ContactEach';

function ContactList(props) {

    useEffect(() => {
        props.fetchContacts()
    }, [])
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {props.value && props.value
                    ? (props.searchedContactList && props.searchedContactList.map(contact => <ContactEach contact={contact} key={contact._id} />))
                    : (props.contactList && props.contactList.map(contact => <ContactEach contact={contact} key={contact._id} />))}
            </tbody>
        </table>
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
        contactList: store.contactList,
        searchedContactList: store.searchedContactList,
        value: store.value
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
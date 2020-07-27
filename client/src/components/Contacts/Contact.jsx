import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import { connect } from "react-redux";
import ContactList from './ContactList';
import AddContact from '../Contacts/AddContact';
import SearchContact from '../Contacts/SearchContact';
import { ClearStoreAC } from '../../redux/action';

function Contact(props) {

    const history = useHistory();

    useEffect(() => {
        if (!props.cookies.get("isLoggedin")) {
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
            props.cookies.remove("isLoggedin");
            props.clearStore();
            history.push('/login')
        } else {
            alert(result.message)
        }
    }
    return (
        <div className='container'>
            <br />
            <div className="container__logout-search">
                <div>
                    <SearchContact />
                </div>
                <div>
                    <button className='logout-button' onClick={logout}>Logout</button>
                </div>
            </div>
            <br />
            <AddContact />
            <br />
            <ContactList />
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        clearStore: () => {
            dispatch(ClearStoreAC())
        }
    };
}

export default withCookies(connect(null, mapDispatchToProps)(Contact));
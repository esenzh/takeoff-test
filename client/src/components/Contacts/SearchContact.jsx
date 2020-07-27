import React from 'react';
import {connect} from 'react-redux';
import { SearchContactAC } from '../../redux/action';

function SearchContact(props) {

    return (
        <input type="text" placeholder='Search by name...' onChange={(e)=> props.searchContact(e.target.value)}/>
    )
}

// function mapStateToProps(store) {
//     return {
//         contactList: store.contactList
//     }
// }

function mapDispatchToProps(dispatch) {
    return {
        searchContact: value => {
            dispatch(SearchContactAC(value))
        }
    };
}

export default connect(null, mapDispatchToProps)(SearchContact);
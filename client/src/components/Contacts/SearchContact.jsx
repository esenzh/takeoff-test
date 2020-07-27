import React from 'react';
import { connect } from 'react-redux';
import { SearchContactAC } from '../../redux/action';

function SearchContact(props) {

    return (
        <input type="search" placeholder='Search by name...' className="search-input" onChange={(e) => props.searchContact(e.target.value)} />
    )
}

function mapDispatchToProps(dispatch) {
    return {
        searchContact: value => {
            dispatch(SearchContactAC(value))
        }
    };
}

export default connect(null, mapDispatchToProps)(SearchContact);
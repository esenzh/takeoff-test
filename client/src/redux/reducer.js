import {
  FETCH_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SEARCH_CONTACT,
  SHOW_ERROR,
  HIDE_ERROR,
  CLEAR_STORE,
} from "./type";

const initialState = {
  contactList: [],
  searchedContactList: [],
  value: '',
  errorAlert: null,
};

export default function (oldState = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTS:
      return {
        ...oldState,
        contactList: action.payload,
      };
    case ADD_CONTACT:
      return {
        ...oldState,
        contactList: [action.payload, ...oldState.contactList],
      };
    case DELETE_CONTACT:
      const updatedContact = oldState.contactList.filter(
        (contact) => contact._id !== action.payload
      );
      if (oldState.searchedContactList.length !== 0) {
        const updatedContact2 = oldState.searchedContactList.filter(
          (contact) => contact._id !== action.payload
        );
        return {
          ...oldState,
          contactList: updatedContact,
          searchedContactList: updatedContact2,
        };
      } else {
        return {
          ...oldState,
          contactList: updatedContact,
        };
      }

    case UPDATE_CONTACT:
      const { _id, name, email, phone } = action.payload;
      const updatedContacts = oldState.contactList.map((contact) =>
        contact._id === _id
          ? {
              ...contact,
              name,
              email,
              phone,
            }
          : contact
      );
      return {
        ...oldState,
        contactList: updatedContacts,
      };
    case SEARCH_CONTACT:
      const searchedContact = oldState.contactList.filter((contact) =>
        contact.name.includes(action.payload)
      );
      return {
        ...oldState,
        searchedContactList: searchedContact,
        value: action.payload
      };
    case SHOW_ERROR:
      return {
        ...oldState,
        errorAlert: action.payload,
      };
    case HIDE_ERROR:
      return {
        ...oldState,
        errorAlert: null,
      };
    case CLEAR_STORE:
      return {
        contactList: [],
        searchedContactList: [],
        value: '',
        errorAlert: null,
      };
    default:
      return oldState;
  }
}

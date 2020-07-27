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
  errorAlert: null,
};

export default function (oldState = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTS:
      return {
        contactList: action.payload,
        errorAlert: oldState.errorAlert,
      };
    case ADD_CONTACT:
      return {
        contactList: [action.payload, ...oldState.contactList],
        errorAlert: oldState.errorAlert,
      };
    case DELETE_CONTACT:
      const updatedContact = oldState.contactList.filter(
        (contact) => contact._id !== action.payload
      );
      return {
        contactList: updatedContact,
        errorAlert: oldState.errorAlert,
      };
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
        contactList: updatedContacts,
        errorAlert: oldState.errorAlert,
      };
    case SEARCH_CONTACT:
      const { value } = action.payload;
      const foundContacts = oldState.contactList.filter((contact) =>
        contact.name.includes(value)
      );
      return {
        contactList: foundContacts,
        errorAlert: oldState.errorAlert,
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
        errorAlert: null,
      };
    default:
      return oldState;
  }
}

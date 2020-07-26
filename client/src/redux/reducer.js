import {
  FETCH_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
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

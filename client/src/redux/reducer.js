import {
  FETCH_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SHOW_ERROR,
  HIDE_ERROR,
  GIVE_ACCESS,
} from "./type";

const initialState = {
  contactList: [],
  errorAlert: null,
  giveAccess: false,
};

export default function (oldState = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTS:
      return {
        contactList: action.payload,
        errorAlert: oldState.errorAlert,
        giveAccess: oldState.giveAccess,
      };
    case ADD_CONTACT:
      return {
        contactList: [action.payload, ...oldState.contactList],
        errorAlert: oldState.errorAlert,
        giveAccess: oldState.giveAccess,
      };
    case DELETE_CONTACT:
      const updatedContact = oldState.contactList.filter(
        (contact) => contact._id !== action.payload
      );
      return {
        contactList: updatedContact,
        errorAlert: oldState.errorAlert,
        giveAccess: oldState.giveAccess,
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
    case GIVE_ACCESS:
      return {
        ...oldState,
        giveAccess: action.payload,
      };
    default:
      return oldState;
  }
}

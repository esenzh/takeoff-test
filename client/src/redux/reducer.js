import { FETCH_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from "./type";

const initialState = {
  contactList: [],
};

export default function (oldState = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTS:
      return {
        contactList: action.payload,
      };
    case ADD_CONTACT:
      return {
        contactList: [action.payload, ...oldState.contactList],
      };
    case DELETE_CONTACT:
      const updatedContact = oldState.contactList.filter(contact => contact._id !== action.payload)
      return {
        contactList: updatedContact,
      };

    default:
      return oldState;
  }
}

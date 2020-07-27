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
  value: "",
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
      const updatedContactList = oldState.contactList.filter(
        (contact) => contact._id !== action.payload
      );
      if (oldState.value) {
        const updatedSearchContactList = oldState.searchedContactList.filter(
          (contact) => contact._id !== action.payload
        );
        return {
          ...oldState,
          contactList: updatedContactList,
          searchedContactList: updatedSearchContactList,
        };
      } else {
        return {
          ...oldState,
          contactList: updatedContactList,
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
      if (oldState.value) {
        const updatedSearchList = oldState.searchedContactList.map((contact) =>
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
          searchedContactList: updatedSearchList,
        };
      } else {
        return {
          ...oldState,
          contactList: updatedContacts,
        };
      }
    case SEARCH_CONTACT:
      const searchedContact = oldState.contactList.filter((contact) =>
        contact.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...oldState,
        searchedContactList: searchedContact,
        value: action.payload,
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
        value: "",
        errorAlert: null,
      };
    default:
      return oldState;
  }
}

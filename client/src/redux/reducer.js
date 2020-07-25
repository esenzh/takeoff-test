import { FETCH_CONTACTS } from "./type";

const initialState = {
  contactList: [],
};

export default function (oldState = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTS:
        return {
            contactList: action.payload
        }

    default:
      return oldState;
  }
}

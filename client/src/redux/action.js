import { FETCH_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from "./type";

export const FetchContactsAC = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("/api/contacts", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const result = await response.json();
      dispatch({ type: FETCH_CONTACTS, payload: result.contacts });
    } catch (e) {}
  };
};

export const AddContactAC = (contact) => {
  return async (dispatch) => {
    try {
      const { name, email, phone } = contact;
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
      });
      const result = await response.json();
      dispatch({type: ADD_CONTACT, payload: result.contact})
    } catch (e) {}
  };
};

export const DeleteContactAC = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch("/api/contacts", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const result = await response.json();
      dispatch({type: DELETE_CONTACT, payload: id})
    } catch (e) {}
  };
};
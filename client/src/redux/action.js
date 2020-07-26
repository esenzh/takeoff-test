import {
  FETCH_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SHOW_ERROR,
  HIDE_ERROR,
} from "./type";

export const ShowErrorAC = (text) => {
  return (dispatch) => {
    dispatch({
      type: SHOW_ERROR,
      payload: text,
    });
    setTimeout(() => {
      dispatch(HideErrorAC());
    }, 3000);
  };
};

export function HideErrorAC() {
  return {
    type: HIDE_ERROR,
  };
}

export const FetchContactsAC = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("/api/contacts", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const result = await response.json();
      dispatch({ type: FETCH_CONTACTS, payload: result.contacts });
    } catch (e) {
      dispatch(ShowErrorAC("Something went wrong, try again..."));
    }
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
      dispatch({ type: ADD_CONTACT, payload: result.contact });
    } catch (e) {
      dispatch(ShowErrorAC("Something went wrong, try again..."));
    }
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
      if (result.message === "Contact deleted") {
        dispatch({ type: DELETE_CONTACT, payload: id });
      }
    } catch (e) {
      dispatch(ShowErrorAC("Something went wrong, try again..."));
    }
  };
};

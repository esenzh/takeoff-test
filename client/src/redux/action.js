import { FETCH_CONTACTS } from "./type";

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

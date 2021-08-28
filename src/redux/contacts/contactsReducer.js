import { combineReducers } from "redux";
import actions from "./contactActions";
import { createReducer } from "@reduxjs/toolkit";

const addContact = (state, { payload }) => {
  if (state.find((contact) => contact.number === payload.number)) {
    alert(`'${payload.number}' is already in your list`);
    return state;
  }
  if (
    state.find(
      (contact) => contact.name.toLowerCase() === payload.name.toLowerCase()
    )
  ) {
    alert(`'${payload.name}' is already in your list`);
    return state;
  }
  alert(`'${payload.name}' added to phonebook`);
  return [...state, payload];
};

const deleteContact = (state, { payload }) => {
  alert(`Contact deleted`);
  return state.filter((cont) => cont.id !== payload);
};

const contacts = createReducer(
  [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  {
    [actions.addContact]: addContact,
    [actions.deleteContact]: deleteContact,
  }
);

const filter = createReducer("", {
  [actions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  contacts,
  filter,
});

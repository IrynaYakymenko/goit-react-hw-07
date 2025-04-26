import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectIsError = (state) => state.contacts.isError;
export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectFilteredContact = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

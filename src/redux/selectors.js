import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectIsError = (state) => state.contacts.isError;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectFilter = (state) => state.filter.text;

export const selectFilteredContact = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

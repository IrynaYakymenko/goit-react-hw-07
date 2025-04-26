import { createSelector } from "@reduxjs/toolkit";
import { selectContacts, selectFilter } from "./selectors";

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

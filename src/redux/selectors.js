export const selectContacts = (state) => state.contacts.items;
export const selectIsError = (state) => state.contacts.isError;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectFilter = (state) => state.filter.text;

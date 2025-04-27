import { configureStore } from "@reduxjs/toolkit";
import { filterReduce } from "./filtersSlice";
import { contactReduce } from "./contactsSlice";

export const store = configureStore({
  reducer: { contacts: contactReduce, filter: filterReduce },
});

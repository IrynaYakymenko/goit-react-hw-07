import { configureStore } from "@reduxjs/toolkit";
import { filterReduce } from "./filtersSlice";
import { contactReduce } from "./contactsOps";

export const store = configureStore({
  reducer: { contacts: contactReduce, filter: filterReduce },
});

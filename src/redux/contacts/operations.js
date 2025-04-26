import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://680d0f4cc47cb8074d8f6f8b.mockapi.io/",
});

export const fetchContacts = createAsyncThunk(
  "contact/fetchContact",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  "contact/addContact",
  async ({ name, number }, thunkAPI) => {
    try {
      const { data } = await instance.post("/contacts", {
        name,
        number,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

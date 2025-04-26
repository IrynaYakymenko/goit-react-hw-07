import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://680d0f4cc47cb8074d8f6f8b.mockapi.io/",
});

export const filterContact = createAsyncThunk(
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

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const updateAuth = createAsyncThunk("/allArtist", async (payload) => {
  try {
    return payload;
  } catch (error) {
    return error.message;
  }
});

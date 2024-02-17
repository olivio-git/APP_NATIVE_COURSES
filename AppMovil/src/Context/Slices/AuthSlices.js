import { createSlice } from "@reduxjs/toolkit";
import { updateAuth } from "../Actions/AuthActions";

const initialState = {
  auth: false
};

const auth = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(updateAuth.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(updateAuth.fulfilled, (state, action) => {
      state.auth = action.payload;
      state.status = "success";
    });
    builder.addCase(updateAuth.rejected, (state, action) => {
      state.status = "rejected";
    }); 
  },
});

export default auth.reducer;

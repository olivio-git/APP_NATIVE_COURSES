import { configureStore } from "@reduxjs/toolkit";
import authSlices from "../Context/Slices/AuthSlices"; 
const store = configureStore({
  reducer: {
    authenticacion: authSlices,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import addProductReducer from "../features/addProduct/addProductSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    addProduct: addProductReducer,
  },
});

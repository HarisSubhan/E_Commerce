import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import productReducer from "../../src/features/addProduct/addProductSlice";
import customersSlice from "../features/customers/customersSlice";
import cartReducer from "../features/CardItem/addCardItemSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    customers: customersSlice,
    cart: cartReducer,
  },
});
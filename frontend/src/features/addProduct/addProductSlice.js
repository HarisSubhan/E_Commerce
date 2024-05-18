import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { adminAddProduct } from "./addProductService";

const initialState = {
  addProduct: [],
  myaddProduct: [],
  addProductLoading: false,
  addProductSuccess: false,
  addProductError: false,
  addProductmessage: "",
};

export const addProduct = createAsyncThunk(
  "addProduct/upload",
  async (productData, thunkAPI) => {
    try {
      return await adminAddProduct(productData);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "addProduct",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;

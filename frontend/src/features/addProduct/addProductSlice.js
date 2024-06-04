import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postAddProduct } from "./addProductService";

const initialState = {
  product: [],
  productLoading: false,
  productSuccess: false,
  productError: false,
  productMessage: "",
};

export const uploadAddProduct = createAsyncThunk(
  "product/add-product",
  async (productData, thunkAPI) => {
    try {
      const responce = await postAddProduct(productData);
      return responce.data;
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productReset: (state) => {
      state.productLoading = false;
      state.productError = false;
      state.productSuccess = false;
      state.productMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadAddProduct.pending, (state) => {
        state.productLoading = true;
        state.productError = null;
      })
      .addCase(uploadAddProduct.rejected, (state, action) => {
        state.productLoading = false;
        state.productError = true;
        state.message = action.payload;
      })
      .addCase(uploadAddProduct.fulfilled, (state, action) => {
        state.productLoading = false;
        state.productSuccess = true;
        state.product.push(action.payload);
        state.productMessage = "product Added Successfully";
      });
  },
});

export const { productReset } = productSlice.actions;
export default productSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllCategorys,
  getAllProducts,
  postAddcategory,
  postAddProduct,
} from "./addProductService";

const initialState = {
  product: [],
  category: [],
  productLoading: false,
  productSuccess: false,
  productError: false,
  productMessage: "",
  categoryLoading: false,
  categorySuccess: false,
  categoryError: false,
};

export const uploadAddProduct = createAsyncThunk(
  "product/add-product",
  async (productData, thunkAPI) => {
    try {
      const responce = await postAddProduct(productData);
      return responce;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.responce.data);
    }
  }
);
export const uploadAddcategory = createAsyncThunk(
  "category/add-category",
  async (categorytData, thunkAPI) => {
    try {
      const responce = await postAddcategory(categorytData);
      return responce;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.responce.data);
    }
  }
);
export const getCategorysData = createAsyncThunk(
  "category/get-category",
  async (_, thunkAPI) => {
    try {
      return await getAllCategorys();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.responce.data);
    }
  }
);
export const getProductData = createAsyncThunk(
  "Product/get-product",
  async (_, thunkAPI) => {
    try {
      return await getAllProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.responce.data);
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
      state.categoryLoading = false;
      state.categorySuccess = false;
      state.categoryError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadAddProduct.pending, (state) => {
        state.productLoading = true;
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
      })
      .addCase(uploadAddcategory.pending, (state) => {
        state.categoryLoading = true;
      })
      .addCase(uploadAddcategory.rejected, (state, action) => {
        state.categoryLoading = false;
        state.categoryError = true;
        state.message = action.payload;
      })
      .addCase(uploadAddcategory.fulfilled, (state, action) => {
        state.categoryLoading = false;
        state.categorySuccess = true;
        state.category.push(action.payload);
        state.productMessage = "Category Added Successfully";
      })
      .addCase(getCategorysData.pending, (state) => {
        state.categoryLoading = true;
      })
      .addCase(getCategorysData.rejected, (state, action) => {
        state.categoryLoading = false;
        state.categoryError = true;
        state.message = action.payload;
      })
      .addCase(getCategorysData.fulfilled, (state, action) => {
        state.categoryLoading = false;
        state.categorySuccess = true;
        state.category = action.payload;
        state.productMessage = "Category Added Successfully";
      })
      .addCase(getProductData.pending, (state) => {
        state.productLoading = true;
      })
      .addCase(getProductData.rejected, (state, action) => {
        state.productLoading = false;
        state.productError = true;
        state.productMessage = "Failed to fetch products";
      })
      .addCase(getProductData.fulfilled, (state, action) => {
        state.productLoading = false;
        state.productSuccess = true;
        state.product = action.payload;
      });
  },
});

export const { productReset } = productSlice.actions;
export default productSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteCategoryById,
  deleteProductById,
  getAllCategorys,
  getAllProducts,
  getProductsByID,
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
  deleteLoading: false,
  deleteSuccess: false,
  deleteError: false,
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

export const getProductDetails = createAsyncThunk(
  "product/getProductDetails",
  async (productId) => {
    // Make API call or fetch from store
    const response = await fetch(`/api/products/${productId}`);
    const productData = await response.json();
    return productData;
  }
);

export const deleteCategory = createAsyncThunk(
  "category/delete-category",
  async (id, thunkAPI) => {
    try {
      await deleteCategoryById(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "product/delete-product",
  async (id, thunkAPI) => {
    try {
      await deleteProductById(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
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
      state.deleteLoading = false;
      state.deleteSuccess = false;
      state.deleteError = false;
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
        state.productMessage = "Product added successfully";
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
        console.log(action);
        state.productLoading = false;
        state.productSuccess = true;
        state.product = action.payload;
      })
      .addCase(deleteCategory.pending, (state) => {
        state.deleteLoading = true;
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.deleteLoading = false;
        state.deleteError = true;
        state.categoryMessage = action.payload;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.deleteLoading = false;
        state.category = state.category.filter(
          (category) => category._id !== action.payload
        );
        state.categoryMessage = "Category deleted successfully";
      })
      .addCase(deleteProduct.pending, (state) => {
        state.deleteLoading = true;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.deleteLoading = false;
        state.deleteError = true;
        state.categoryMessage = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.deleteLoading = false;
        state.product = state.product.filter(
          (product) => product._id !== action.payload
        );
        state.productMessage = "Product deleted successfully";
      })
      .addCase(getProductID.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductID.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })
      .addCase(getProductID.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { productReset } = productSlice.actions;
export default productSlice.reducer;

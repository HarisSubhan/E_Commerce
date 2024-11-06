import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCustomers, getCustomerProfile } from "./customersService";
const initialState = {
  customers: [],
  customersLoading: false,
  customersSuccess: false,
  customersError: false,
  customersMessage: "",
};

export const getCustomersData = createAsyncThunk(
  "customer/get-customers",
  async (_, thunkAPI) => {
    try {
      return await getAllCustomers();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.responce.data);
    }
  }
);

export const CustomerProfile = createAsyncThunk(
  "customer/get-customers-profile",
  async (_, thunkAPI) => {
    try {
      return await getCustomerProfile();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.responce.data);
    }
  }
);

export const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    customersReset: (state) => {
      state.customersLoading = false;
      state.customersError = false;
      state.customersSuccess = false;
      state.customersMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCustomersData.pending, (state) => {
        state.customersLoading = true;
      })
      .addCase(getCustomersData.rejected, (state, action) => {
        state.customersLoading = false;
        state.customersError = true;
        state.customersMessage = "Failed to fetch customers";
      })
      .addCase(getCustomersData.fulfilled, (state, action) => {
        state.customersLoading = false;
        state.customersSuccess = true;
        state.customers = action.payload;
      })
      .addCase(CustomerProfile.pending, (state) => {
        state.customersLoading = true;
      })
      .addCase(CustomerProfile.rejected, (state, action) => {
        state.customersLoading = false;
        state.customersError = true;
        state.customersMessage = "Failed to fetch customers";
      })
      .addCase(CustomerProfile.fulfilled, (state, action) => {
        state.customersLoading = false;
        state.customersSuccess = true;
        state.customers = action.payload;
      });
  },
});

export const { customersReset } = customersSlice.actions;
export default customersSlice.reducer;

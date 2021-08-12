import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchProducts from "../../services/fetchProducts";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  fetchProducts
);
export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    // loading: true,
  },
  reducers: {},
  extraReducers: {
    [fetchAllProducts.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [fetchAllProducts.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      products: [...state.products, ...action.payload],
    }),
  },
});

export const { getAllproducts } = productSlice.actions;

export default productSlice.reducer;

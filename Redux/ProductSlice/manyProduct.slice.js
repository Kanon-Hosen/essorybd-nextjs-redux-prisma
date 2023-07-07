import { useQuery } from "@tanstack/react-query";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await fetch("http://localhost:3000/api/product/");
    const data = await response.json();
    return data;
  }
);

export const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productsLoading: false,
    productsError: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.productsLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.productsLoading = false;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.productsError = action.payload;
      state.productsLoading = false;
    });
  },
});

export default ProductsSlice.reducer;

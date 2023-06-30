const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fatchOneProduct = createAsyncThunk(
  "oneProduct/fatchOneProduct",
  async (id) => {
    const res = await fetch(``);
    const data = res.json();
    return data;
  }
);

export const OneProductSlice = createSlice({
  name: "oneProduct",
  initialState: {
    isLoading: false,
    product: {},
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fatchOneProduct.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(fatchOneProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
        state.error = null;
      });
    builder.addCase(fatchOneProduct.rejected, (state, action) => {
      (state.isLoading = false),
        (state.product = {}),
        (state.error = action.error.message);
    });
  },
});

export default OneProductSlice.extraReducers;
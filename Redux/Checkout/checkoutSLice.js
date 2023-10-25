const { createSlice } = require("@reduxjs/toolkit");

const CheckoutSlice = createSlice({
  name: "Checkout",
  initialState: {
    data: [],
  },
  reducers: {
    addCheckout: (state, action) => {
      state.data = [action.payload];
    },
  },
});

export const { addCheckout } = CheckoutSlice.actions;
export default CheckoutSlice.reducer;

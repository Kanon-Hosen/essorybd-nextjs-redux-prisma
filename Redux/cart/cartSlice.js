const { createSlice } = require("@reduxjs/toolkit");
const localKey = (Object.keys(localStorage))

const localName = localKey.find(local => local === "cartProducts");

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    quantity:
    localName 
        ? JSON.parse(localStorage.getItem("cartProducts"))[0]
        : 0,
    products:
    localName
        ? JSON.parse(localStorage.getItem("cartProducts"))[1]
        : [],
    isAdd: false,
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product =
        state.products &&
        state.products?.find((p) => p.id === action.payload.id);
      if (product) {
        state.quantity = state.quantity;
      } else {
        (state.quantity = state.quantity + 1),
          (state.products = [...state.products, action.payload]);
        localStorage.setItem(
          "cartProducts",
          JSON.stringify([state.quantity, [...state.products]])
        );
        state.isAdd = !state.isAdd;
      }
    },
    removeOneCart: (state, action) => {
      const id = action.payload;
      state.products = state.products?.filter((p) => p.id !== id);
      if (state.quantity > 1) {
        state.quantity = state.quantity - 1;
      } else {
        state.quantity = 0;
      }
      localStorage.setItem(
        "cartProducts",
        JSON.stringify([state.quantity, [...state.products]])
      );
      state.isAdd = !state.isAdd;
    },
    removeAllCart: (state) => {
      state.quantity = 0;
      state.products = [];
      localStorage.removeItem("cartProducts");
    },
    calculateAll: (state) => {
      let prices = state?.products?.map((p) => Number(p?.price) * p.quantity);
      state.total = prices?.reduce((a, b) => a + b, 0);
    },
  },
});

export const { addToCart, removeOneCart, removeAllCart, calculateAll } =
  CartSlice.actions;
export default CartSlice.reducer;

const { createSlice } = require("@reduxjs/toolkit");

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    quantity: 0,
    products: [],
  },

  reducers: {
    addToCart: (state, action) => {
      const product = state.products?.find((p) => p.id === action.payload.id);
      if (product) {
        state.quantity = state.quantity ;
        // localStorage.setItem('cartProducts', JSON.stringify([state.quantity, [...state.products]]));

      } else {
        (state.quantity = state.quantity + 1),
          (state.products = [...state.products, action.payload]);
          localStorage.setItem('cartProducts', JSON.stringify([state.quantity, [...state.products]]));
      }
    },
    removeOneCart: (state, action) => {
      const product = state.products?.filter(p => p.id !== action.payload.id);
      state.products = product; 
      state.quantity = state.quantity - 1;
      localStorage.setItem('cartProducts', JSON.stringify([state.quantity , [...state.products]]));

      // if (product) {
      //   state.products = 
      // }
    },
    removeAllCart: (state)=> { 
      state.quantity = 0;
      state.products = [];
      localStorage.removeItem('cartProducts');

    }
  },
});

export const { addToCart, removeOneCart, removeAllCart } = CartSlice.actions;
export default CartSlice.reducer;

const { createSlice } = require("@reduxjs/toolkit");

const localKey = Object.keys(localStorage);

const localName = localKey.find((local) => local === "wishlistProducts");

const CreateWishlist = createSlice({
  name: "wishlist",
  initialState: {
    quantity: localName
      ? JSON.parse(localStorage.getItem("wishlistProducts"))[0]
      : 0,
    products: localName
      ? JSON.parse(localStorage.getItem("wishlistProducts"))[1]
      : [],
  },

  reducers: {
    addWishlist: (state, action) => {
      const product =
        state.products &&
        state.products?.find((p) => p.id === action.payload.id);
      if (product) {
        state.quantity = state.quantity;
      } else {
        (state.quantity = state.quantity + 1),
          (state.products = [...state.products, action.payload]);
        localStorage.setItem(
          "wishlistProducts",
          JSON.stringify([state.quantity, [...state.products]])
        );
      }
    },
  },
});

export const { addWishlist } = CreateWishlist.actions;
export default CreateWishlist.reducer;

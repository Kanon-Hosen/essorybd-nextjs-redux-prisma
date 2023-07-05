// import OneProductSlice from "./ProductSlice/OneProductSlice";
import productReducer from "./ProductSlice/manyProduct.slice";
import cartReducer from "./cart/cartSlice";
import CounterReducer from "./counterSlice/CounterSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    cartR: cartReducer,
    allProducts: productReducer
  },
});
export default store;

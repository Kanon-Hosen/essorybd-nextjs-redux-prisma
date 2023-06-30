// import OneProductSlice from "./ProductSlice/OneProductSlice";
import cartReducer from "./cart/cartSlice";
import CounterReducer from "./counterSlice/CounterSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    cartR : cartReducer
  },
});
export default store;

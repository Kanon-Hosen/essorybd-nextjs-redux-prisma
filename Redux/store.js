// import OneProductSlice from "./ProductSlice/OneProductSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import cartReducer from "./cart/cartSlice";
import checkoutReducer from "./Checkout/checkoutSLice";
import CounterReducer from "./counterSlice/CounterSlice";
import { configureStore } from "@reduxjs/toolkit";
import { AppApi } from "./AppApi/AppApi";
import wishlistReducer from "./wishlist/wishlist";

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    cartR: cartReducer,
    checkout: checkoutReducer,
    wishlist: wishlistReducer,
    [AppApi.reducerPath]: AppApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(AppApi.middleware);
  },
});

setupListeners(store.dispatch);
export default store;

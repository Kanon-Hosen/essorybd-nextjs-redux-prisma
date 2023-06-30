import OneProductSlice from "./ProductSlice/OneProductSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    oneProductR: OneProductSlice,
  },
});

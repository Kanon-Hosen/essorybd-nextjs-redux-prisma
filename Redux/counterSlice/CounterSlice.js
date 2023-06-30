const { createSlice } = require("@reduxjs/toolkit");

const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },

  reducers: {
    increment: (state, action) => {
      if (state.count  !== action.payload) {
        state.count = state.count + 1;
      }
    },
    decrement: (state) => {
      if (state?.count !== 0) {
        state.count = state.count - 1;
      }
    },
  },
});

export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;

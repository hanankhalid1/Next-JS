import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  count: 10,
  userName: "Hanan",
  email: "hanan@gmail.com",
};

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count += 1;
    },
    decrement: (state) => {
      state.count = state.count -= 1;
    },
  },
});
// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;



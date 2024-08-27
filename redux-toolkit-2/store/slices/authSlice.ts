import { createSlice } from "@reduxjs/toolkit";

let initalState = {
  isUserLogin: false,
  user: {
    email: "hanan123@gmail.com",
    password: "123456",
  },
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: initalState,
  reducers: {
    login: (state, action) => {
      console.log("action", action);
      console.log("state", state);
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;

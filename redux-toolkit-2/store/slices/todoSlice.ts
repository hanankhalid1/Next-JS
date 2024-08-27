import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  email: "hanan@gmail.com",
  isLoading: false,
  todos: [
    {
      id: 1,
      title: "Todo 1",
      description: "Prepare the lecture 1",
      completed: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: initialState,
  reducers: {
    // Actions
    createNewTodo: (state: any, action: any) => {
      console.log("state", state);
      console.log("acrtion", action);
      state.todos = [...state.todos, action.payload];
    },
  },
});

export const { createNewTodo } = todoSlice.actions;
export default todoSlice.reducer;

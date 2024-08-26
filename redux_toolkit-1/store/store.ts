import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slicecs/counterSlice'

export const store = configureStore({
  reducer: {
    // counter
   counter: counterSlice.reducer
   //slices2
   //slice3
   //slice4
  },
})

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products/listOfProducts' ,
     async (data , thunkapi ) =>{
            const response = await fetch('https://fakestoreapi.com/products');
            return response.json();

    });

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        });
    },
   
    });
export default productSlice.reducer;

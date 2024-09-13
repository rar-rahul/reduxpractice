import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
    status:'',
    cartTotal:0,
    cart:[],
    cartStatus:''
}

export const ProductSlice = createSlice({
    name:'Product',
    initialState,
    reducers:{
        fetchProducts:(state) => {
            state.status = 'pending'
        },
        fetchProductsSuccess:(state,action) => {
            state.status = 'success';
            state.products = action.payload
        },
        fetchProductsError:(state) => {
            state.status = 'error';
        },
        addTocart:(state,action) => {
           return {
            ...state,
            cart:[...state.cart,action.payload]
           }
        },
        removeCart:(state,action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        editCart:() => {

        }

    }
})

export const {fetchProductsSuccess,fetchProducts,addTocart,removeCart,editCart} = ProductSlice.actions
export default ProductSlice.reducer
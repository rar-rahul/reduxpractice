import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
    status:'',
    cartTotal:0,
    cart:[],
    cartStatus:''
}

export const updateQtyTotalAmount = createAsyncThunk('Product/updateQtyTotal',

    async({ id, qty }, { getState }) => { 
        const state = getState();
       
        const cart = state.store.cart;
        const product = state.cart.find(item => item.id === id)
      
        if(product){
            product.qty = qty
            const totalAmount = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
            console.log('Total Amount:', totalAmount);
            return { id, qty, totalAmount };
        }
        return { id, qty, totalAmount:0 };

    }
)

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
            const product = action.payload;
            console.log(product)
            const existProduct = state.cart.find(item => item.id === product.id);

            if(existProduct){
                existProduct.qty += product.qty
            }else{
                return {
                    ...state,
                    cart:[...state.cart,action.payload]
                   }
            }
           
        },
        removeCart:(state,action) => {
         state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        updateCart:(state,action) => {
            const {id,qty} = action.payload
            const product = state.cart.find(item => item.id === id)
            if(product){
                product.qty = qty
            }
        }
    },
    extraReducers:(builder) => {
        builder
        .addCase(updateQtyTotalAmount.fulfilled,(state,action) => {
            const { id, qty, totalAmount } = action.payload;
            const product = state.cart.find(item => item.id === id);
            if (product) {
                product.qty = qty; // Update qty in the cart
            }
            state.cartTotal = totalAmount; // Update total amount in the state
        })
    },
    selectors:{
        cartTotal:(state) => state.cart.reduce((acc,item) => acc + item.price * item.qty,0)
    } 

})
//selector export
export const cartTotalSelector = (state) => state.cart.reduce((acc,item) => acc + item.price * item.qty,0)

export const {fetchProductsSuccess,fetchProducts,addTocart,removeCart,updateCart} = ProductSlice.actions
export const {cartTotal} = ProductSlice.selectors
export default ProductSlice.reducer
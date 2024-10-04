import { createSlice,createAsyncThunk,createAction } from "@reduxjs/toolkit"
import { fetchPost } from "../Tunk/fetchPost";

const getCart = createAction('getCartList');
console.log(getCart);
const initialState = {
    value:0,
    products:[],
    state:'idil',
    posts:[],
    users:[],
    isLoading:false
}
//tunk function using asyncThunk
export const fetchData = createAsyncThunk('counter/fetchproduct',
    async () => {
        const responce = await fetch('https://dummyjson.com/products');
        return await responce.json();
    }
)

export const CounterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state) => {
           return {
            ...state,
            value:state.value + 1
           }
        },
        decrement:(state) => {
            return {
             ...state,
             value:state.value - 1
            }
         },
        incByNumber:(state,action) => {
           return {
            ...state,
            value:state.value + action.payload
           }
        },
        loadPosts:(state,action) => {
          return {
            ...state,
            posts:action.payload
          }
        },
        fetchUserData:(state) => { 
            state.isLoading = true
        },
        fetchuserSuccess:(state,action) => {
            state.isLoading = false;
            state.users = action.payload
        }
        
    },
    selectors:{
        selectValue:(state) => state.value + 250
    },
    extraReducers:(builder) => {
        builder
        .addCase(fetchData.fulfilled,(state,action) => {
            state.products.push(action.payload)
             state.status = 'success'
        })
        .addCase(fetchData.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(fetchData.rejected, (state) => {
            state.status = 'rejected'
        })
    }
})

export const { increment,decrement,incByNumber,loadPosts,fetchUserData,fetchuserSuccess }  =  CounterSlice.actions;

export const {selectValue} = CounterSlice.selectors


export default CounterSlice.reducer

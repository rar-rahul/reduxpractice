import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
const initialState = {
    value:0,
    products:[]
}


const fetchData = createAsyncThunk('counter/fetchproduct',
    async () => {
        const responce = await fetch('https://dummyjson.com/products');
        return responce.json()
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
        }
    },
    selectors:{
        selectValue:(state) => state.value + 100
    },
    extraReducers:(builder) => {
        builder
        .addCase(fetchData.fulfilled,(state,action) => {
            state.products.push(action.payload)
        })
    }
})

export const { increment,decrement,incByNumber }  =  CounterSlice.actions;

export const {selectValue} = CounterSlice.selectors

export default CounterSlice.reducer

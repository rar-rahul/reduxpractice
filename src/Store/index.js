import {configureStore} from '@reduxjs/toolkit'
import {CounterReducer} from '../Reducer/CounterReducer'
import CounterSlice from '../Reducer/CounterSlice'

export const Store = configureStore({
        reducer:{
            counter:CounterReducer,
            counterTwo:CounterSlice
        }
        
})


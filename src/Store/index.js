import {configureStore, applyMiddleware} from '@reduxjs/toolkit'
import {CounterReducer} from '../Reducer/CounterReducer'
import CounterSlice from '../Reducer/CounterSlice'
import thunk from 'redux-thunk'
import thunkMiddleware  from 'redux-thunk'

export const Store = configureStore({
        reducer:{
            counter:CounterReducer,
            counterTwo:CounterSlice
        }
        
})


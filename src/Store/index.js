import {configureStore, applyMiddleware,combineSlices} from '@reduxjs/toolkit'
import {CounterReducer} from '../Reducer/CounterReducer'
import CounterSlice from '../Reducer/CounterSlice'
import ProductSlice from '../Reducer/ProductSlice'
import {thunk} from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga'
import logger from 'redux-logger'
//we can use combine slice like that
const rootReducer = combineSlices(CounterSlice,ProductSlice)


const sagaMiddleware = createSagaMiddleware()

export const Store = configureStore({
        reducer:{
            counter:CounterReducer,
            counterTwo:CounterSlice,
            store:ProductSlice
        },
       // middleware:[sagaMiddleware]
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware({ thunk: true }) // Enable default thunk if needed
              .concat(sagaMiddleware, thunk,logger), 
        
})

//must need to run saga middelware
sagaMiddleware.run(rootSaga)



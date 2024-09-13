//create genrative function 

import {all, call,put,takeEvery} from 'redux-saga/effects';
import { fetchuserSuccess,fetchUserData} from '../Reducer/CounterSlice';
import { fetchProducts,fetchProductsSuccess } from '../Reducer/ProductSlice';

//worker
function* getUser(){
    const users = yield call(() => fetch('https://dummyjson.com/users'))
    const res = yield users.json();
    yield put(fetchuserSuccess(res))
}

//watcher
 function* fetchUser() {
    yield takeEvery('counter/fetchUserData',getUser)
}

function* getProducts(){
const products = yield call(() => fetch('https://dummyjson.com/products'));
const responce = yield products.json();
yield put(fetchProductsSuccess(responce));
}

function* fetchproducts() {
    yield takeEvery('Product/fetchProducts',getProducts)
}


export default function* rootSaga(){
    yield all([
        fetchproducts(),
        fetchUser()
    ])
}
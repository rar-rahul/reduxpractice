import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Store } from '../Store'
import CounterSlice from './CounterSlice';
import { fetchData } from '../Reducer/CounterSlice';
import { fetchPost } from '../Tunk/fetchPost';
import { selectValue } from '../Reducer/CounterSlice';

const increment = () => {
    return {
      type: 'INC',
    };
  };

  const decrement = () => {
    return {
      type: 'DEC',
    };
  };

const Home = () => {
    const store = useSelector((state) => state.counter.value)
    const products = useSelector((state) => state.counterTwo)
    const dispatch = useDispatch()
    console.log(products.products)
    
    
    const handleInc = () => {
        //handling core redux property or method
        Store.dispatch(increment())
    }
    const handleDec = () => {
        //handling core redux property or method
        Store.dispatch(decrement())
    }

    useEffect(() => {
      dispatch(fetchData());
      Store.dispatch(fetchPost)
    }, [dispatch]);
  return (
    <div className="mt-10 max-w-2xl mx-auto p-5 bg-gray-100 rounded-lg shadow-lg">
  <div className="text-center">
    <h3 className="text-2xl font-bold mb-4">Counter Using Redux Core (Reducer Function)</h3>
    <h2 className="text-3xl font-semibold mb-6">{store}</h2>

    <div className="space-x-4">
      <button
        className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
        onClick={handleInc}
      >
        Increment +
      </button>
      <button
        className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 focus:outline-none"
        onClick={handleDec}
      >
        Decrement -
      </button>
    </div>
  </div>

  <div className="my-8">
    <CounterSlice />
  </div>

  <hr className="my-6" />

  <div>
    <h2 className="text-2xl font-bold mb-4">Product List (Using CreateAsyncThunk)</h2>
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="text-lg font-medium text-gray-700">{products.status}</div>
    </div>
  </div>
</div>

  )
}

export default Home

import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Store } from '../Store'
import CounterSlice from './CounterSlice';


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
    const dispatch = useDispatch()
   // console.log(Store.getState().counter)
    console.log(store)
    const handleInc = () => {
        //handling core redux property or method
        Store.dispatch(increment())
    }
    const handleDec = () => {
        //handling core redux property or method
        Store.dispatch(decrement())
    }
  return (
    <div className='mt-5'>
<h3>Counter Using Redux Core using reducer function</h3>
        <h2>{store}</h2>
        <button onClick={handleInc}>Increment + </button>
        <button onClick={handleDec}>Decrement - </button>
    <div>
        <CounterSlice/>
    </div>

    </div>
  )
}

export default Home

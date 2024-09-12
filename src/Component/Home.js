import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Store } from '../Store'
import CounterSlice from './CounterSlice';
import { fetchData } from '../Reducer/CounterSlice';
import { fetchPost } from '../Tunk/fetchPost';

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
    console.log(products.posts)
    
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
    <div className='mt-5'>
<h3>Counter Using Redux Core using reducer function</h3>
        <h2>{store}</h2>
        <button onClick={handleInc}>Increment + </button>
        <button onClick={handleDec}>Decrement - </button>
    <div>
        <CounterSlice/>
    </div>
<hr/>
    <div>
      <h2>Product List (USING CreatAsyncThunk)</h2>

        <div> 
           {products.status}
        </div>

    </div>

    </div>
  )
}

export default Home

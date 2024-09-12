import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment ,decrement,incByNumber,selectValue} from '../Reducer/CounterSlice'
const CounterSlice = () => {
    const store = useSelector((state) => state.counterTwo.value)
    const [number,setNumber] = useState(0);
  const selectorVal = useSelector(selectValue)
  console.log(selectorVal)
    const dispatch = useDispatch();

    const handleInc = () => {
        dispatch(increment())
    }

    const handleDec = () => {
        dispatch(decrement())
    }

    const handleIncByNum = () => {
        dispatch(incByNumber(parseInt(number)))
    }

    console.log(number)

  return (
    <div>
        <div>
            <h3>Counter Using Redux toolkit</h3>
            <h2>Count : {store}</h2>
            <div className='mt-4'>
            <button onClick={handleInc}>Increment + </button>
            <button onClick={handleDec}>Decrement - </button>
            
           <div>
           Inc By <input type='number' value={number} onChange={(e) => setNumber(e.target.value)}/> 
           <button onClick={handleIncByNum}>Add</button>
            </div> 
            </div>
        </div>
    </div>
  )
}

export default CounterSlice

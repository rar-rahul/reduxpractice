import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { removeCart,updateCart,cartTotalSelector,updateQtyTotalAmount } from '../Reducer/ProductSlice';
const Cart = () => {
    const {cart} = useSelector((state) => state.store)
   //const totalPrice = useSelector(cartTotal)
    const dispatch = useDispatch()
  const totalPrice = cart.reduce((total, item) => total + item.price * item.qty, 0);

  const handleChange = (e,itemId) => {
    const newQty = Number(e.target.value);
    console.log(newQty)
    dispatch(updateQtyTotalAmount({id:itemId,qty:newQty}))
  }

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      
      {cart.length === 0 ? (
        <p className="text-lg text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 mb-6">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => dispatch(removeCart(item.id))}
                >
                  Remove
                </button>
                <input type='number' key={item.id} onChange={(e) => handleChange(e, item.id)}  className='px-4 py-2 rounded border-spacing-1' value={item.qty}/>
               
              </div>
            ))}
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Total Amount: Rs.{totalPrice.toFixed(2)}</h2>
            <button className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

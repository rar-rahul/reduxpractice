import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
    const {cart} = useSelector((state) => state.store)
    console.log(cart)
  return (
    <div>
    <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
     
      <a href="#" class="text-white text-xl font-bold">Logo</a>
      
    
      <div class="hidden md:flex space-x-4">
        <Link to={'/'} class="text-gray-300 hover:text-white">Home</Link>
        <Link to={'/tanstack'} class="text-gray-300 hover:text-white">TanStack</Link>

        <Link to={'/store'} class="text-gray-300 hover:text-white">Product Store</Link>
        <a href="#" class="text-gray-300 hover:text-white">Thunk</a>
        <Link to={'/saga'} class="text-gray-300 hover:text-white">Saga</Link>
        <Link to={'/cart'} class="text-gray-300 hover:text-white">Cart {cart.length}</Link>
        <a href="#" class="text-gray-300 hover:text-white">Redux</a>
      </div>
    </div>

  </nav>
    </div>
  )
}

export default Navbar

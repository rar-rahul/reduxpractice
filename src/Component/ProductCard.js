import React from 'react'
import { useDispatch } from 'react-redux'
import { addTocart } from '../Reducer/ProductSlice'
const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        
        dispatch(addTocart({
            id:product.id,
            title:product.title,
            price:product.price,
        }))
    }
  return (
    <div>
       <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4">{product.description.slice(0, 60)}...</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
          <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductCard

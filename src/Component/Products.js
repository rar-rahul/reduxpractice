import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchProducts } from '../Reducer/ProductSlice'
import ProductCard from './ProductCard'
const Products = () => {
    const {products,status,cart} = useSelector((state) => state.store)
    const dispatch = useDispatch()
    const product = products.products

    
    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch])

  return (
    <div>
     {status == 'pending' ? (
       <div className="text-center">
       <div className="inline-block w-8 h-8 border-4 border-t-4 border-gray-200 rounded-full animate-spin"></div>
     </div>
     ): ( 
       <div>
        <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        product?.map((product) => (
            <ProductCard product={product} key={product.id}/>
        ))
      }
      </div>
    </div>
       </div>
     )}
    </div>
  )
}

export default Products

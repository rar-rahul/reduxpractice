import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchUserData } from '../Reducer/CounterSlice'

const Saga = () => {
    const store = useSelector((state) => state.counterTwo)
    const users = store.users.users
    const isLoading = store.isLoading
    const dispatch = useDispatch()
   
    console.log(users)

    useEffect(() => {
        dispatch(fetchUserData())
    },[dispatch])

  return (
    <div>
     <div class="container mx-auto p-5">
    <h1 class="text-3xl font-bold text-center mb-8">User List</h1>
    { isLoading ? (
       <div className="text-center">
       <div className="inline-block w-8 h-8 border-4 border-t-4 border-gray-200 rounded-full animate-spin"></div>
     </div>
    ):(
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {
        users?.map((user) => (
<div class="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={user.image} alt="User Avatar" class="w-24 h-24 rounded-full mx-auto mb-4"/>
          <h2 class="text-xl font-semibold text-center mb-2">{user.firstName}</h2>
          <p class="text-gray-600 text-center">{user.email}</p>
          <p class="text-gray-500 text-center">{user.role}</p>
        </div>
        ))
    }
        
      </div>  
    )
}

    
    </div>
    </div>
  )
}

export default Saga

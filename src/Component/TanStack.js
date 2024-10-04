import React from 'react'
import {useInfiniteQuery, useQuery} from '@tanstack/react-query'
import { Link } from 'react-router-dom'
const TanStack = () => {

      const fetcposts = async({pageParam}) =>  {
        const res = await fetch(`http://localhost:3000/posts?_limit=4&page=${pageParam}`)
        const data = await res.json()
        return data;
      }

      // const {data,isLoading,isError,error,refetch} =  useQuery({
      //   queryKey:['posts'],
      //   queryFn:async () => {
      //     const res = await fetch('http://localhost:3000/posts')
      //     const data = await res.json()
      //     return data;
      //   },
      //   // refetchInterval:1000, //fetching api call every single sec
      //   // refetchIntervalInBackground:true  //run in the backgroun
      //   // enabled:false
      // })

      const {data,isLoading,isError,error,refetch,fetchNextPage} =  useInfiniteQuery({
        queryKey:['posts'],
        queryFn:fetcposts,
        initialPageParam:1,
        getNextPageParam:(_lastPage,allPages) => {
          if(allPages.length > 5) {
            return allPages.length + 1
          }else{
            return undefined;
          }
        }
         
       
        // refetchInterval:1000, //fetching api call every single sec
        // refetchIntervalInBackground:true  //run in the backgroun
        // enabled:false
      })

        console.log(data)

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
     <div className="container mt-4">
     <button onClick={refetch}>Refetch Posts</button>
      <div className="row">
        {data?.pages?.map(page => {

            return page?.map(post => {
              return <div className="col-md-4 mb-4" key={post.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">
                    {post.body.length > 100 ? post.body.substring(0, 100) + '...' : post.body}
                  </p>
                </div>
                <div className="card-footer">
                  <Link to={`/tanstack/${post.id}`} className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            })
          
        })}
        
        
      </div>
      <button className='btn btn-sm btn-danger' onClick={fetchNextPage}>Load More..</button>
    </div>
    </div>
  )
}

export default TanStack

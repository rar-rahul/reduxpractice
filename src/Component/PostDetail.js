import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'

const fetchPostDetail = async(postId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = await res.json()
    return data;
}

const PostDetail = () => {
    const {postId} = useParams()
    console.log(postId)
    const {data,isLoading,isError,error} = useQuery({
        queryKey:['posts',postId],
        queryFn:() => fetchPostDetail(postId)
    })

    
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <h3>This is details page</h3>

      <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{data?.title}</h5>
                <p className="card-text">
                  {data?.body.length > 100 ? data?.body.substring(0, 100) + '...' : data?.body}
                </p>
              </div>
             
            </div>
          </div>

    </div>
  )
}

export default PostDetail

import { loadPosts } from "../Reducer/CounterSlice";
//creating thunk function 
export const fetchPost = async (dispatch,getState) => {
       
     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
     const data = await res.json();
     dispatch(loadPosts(data))

}

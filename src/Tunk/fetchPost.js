import { loadPosts } from "../Reducer/CounterSlice";
//creating thunk function 
export const fetchPost = async (dispatch,getState) => {
       
     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
     const data = await res.json();
     dispatch(loadPosts(data))
    //we can get current root store in thunk function also
     console.log(getState())
}

import React, { useReducer } from 'react'

const reducer = (state,action) => { 
    //logic going there
    console.log("reducer",state,action.payload)
    switch (action.type) {
        case "REMOVE":
            return state
            
            break;
    
        default:
           return state
    }
}

const initialState = [
    {
        id:1,
        Tech:"React"
    },
    {
        id:1,
        Tech:"Angular"
    }
]

const Reducer = () => {
    const[todo,dispatch] = useReducer(reducer,initialState);

    const handleChange = (todo) => { 
        console.log(todo)
        dispatch({type:"REMOVE",id:todo.id})
    }

  return (
    <div>
         <h3>This is reducer component</h3>
        {
            todo?.map((list) => (
                <div key={list.id}>
                    {list.Tech}
                <button onClick={() => handleChange(list)}>Remove</button>
                </div>
            ))
        }

     
    </div>
  )
}

export default Reducer

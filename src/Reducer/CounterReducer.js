import { createAction } from "@reduxjs/toolkit";

const addPost = createAction();
const initialState = {value:0}
export function CounterReducer(state = initialState,action) {

    // if (action.type === 'INC') {
    //     return {
    //       ...state,
    //       value: state.value + 1
    //     }
    //   }
    //   if(action.type === 'DEC'){
    //     return {
    //         ...state,
    //         value:state.value - 1
    //     }
    //   }

    switch(action.type){
        case "INC":
            return {
                       ...state,
                       value: state.value + 1
                    } 
            break;

            case "DEC":
                return {
                    ...state,
                    value:state.value - 1
                }
                break;

     default:
      break;
    }

        
    return state ;
}
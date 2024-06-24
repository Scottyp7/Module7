import { useReducer } from "react";
import { useState, useEffect } from "react";

function ReducerApp() {
 const [state, dispatch] = useReducer(reducer, {count :0})

    function reducer (state, action) {
        switch(action.type) {
            case 'increase':
                return { count: state.count + 1}
            case 'decrease':
                return { count: state.count - 1}
            default:
                return state; /* returns the current state if no buttons are pressed */
            }
    
        }

    function increase (){
        dispatch({type:'increase'})
    }
    function decrease (){
        dispatch({type:'decrease'})
    }

    return(
    <>   
        <button onClick={decrease}>Decrease</button>
        <span>{state.count}</span>
        <button onClick={increase}>Increase</button>
        </>
    )
}
export default ReducerApp
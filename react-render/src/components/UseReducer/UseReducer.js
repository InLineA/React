import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (currentState, action) => {
    switch(action){
        case 'inc':
            return currentState + 1
        case 'dec':
            return currentState - 1
        case 'set100':
            return 100
        case 'res':
            return initialState
        default:
            return currentState
    }
}

export const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    
    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch('inc')}>Increment</button>
            <button onClick={() => dispatch('dec')}>Decrement</button>
            <button onClick={() => dispatch('res')}>Reset</button>
            <button onClick={() => dispatch('set100')}>Set 100</button>
        </>
    )
}
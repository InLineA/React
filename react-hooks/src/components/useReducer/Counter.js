import React, { useReducer } from 'react'

const initialState = 0
const reducer = (currentState, action) => {
    switch(action){
        case 'increment':
            return currentState + 1
        case 'decrement':
            return currentState - 1
        case 'reset':
            return initialState
        default:
            return currentState
    }
    
}

function Counter() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch('decrement')} >Decrement</button>
            <button onClick={() => dispatch('increment')} >Increment</button><br />
            <button onClick={() => dispatch('reset')} >Reset</button>
        </div>
    )
}

export default Counter
import React, { useReducer } from 'react'

const initialState = {
    count: 0
}
const reducer = (currentState, action) => {
    switch(action.type){
        case 'increment':
            return { count: currentState.count + 1}
        case 'decrement':
            return { count: currentState.count - 1}
        case 'reset':
            return initialState
        default:
            return currentState
    }
}

function MultipleReducers() {
    const [firstCount, firstDispatch] = useReducer(reducer, initialState)
    const [secondCount, secondDispatch] = useReducer(reducer, initialState)

    return (
        <>
            <h1>Count one: {firstCount.count}</h1>
            <button onClick={() => firstDispatch({ type: 'decrement' })} >Decrement</button>
            <button onClick={() => firstDispatch({ type: 'increment' })} >Increment</button>
            
            <h1>Count two: {secondCount.count}</h1>
            <button onClick={() => secondDispatch({ type: 'decrement' })} >Decrement</button>
            <button onClick={() => secondDispatch({ type: 'increment' })} >Increment</button>
        </>
    )
}

export default MultipleReducers
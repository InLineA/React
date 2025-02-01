import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 0
}
const reducer = (currentState, action) => {
    switch (action.type) {
        case 'increment':
            return { ...currentState, firstCounter: currentState.firstCounter + action.value }
        case 'decrement':
            return { ...currentState, firstCounter: currentState.firstCounter - action.value }
        case 'increment2':
            return { ...currentState, secondCounter: currentState.secondCounter + action.value }
        case 'decrement2':
            return { ...currentState, secondCounter: currentState.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return currentState
    }

}

function ObjectReducer() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>First Count: {count.firstCounter}</h1>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })} >Decrement</button>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })} >Increment</button><br />

            <h1>Second Count: {count.secondCounter}</h1>
            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })} >Decrement</button>
            <button onClick={() => dispatch({ type: 'increment2', value: 1 })} >Increment</button><br /><br />

            <button onClick={() => dispatch({ type: 'reset' })} >Reset</button>
        </div>
    )
}

export default ObjectReducer
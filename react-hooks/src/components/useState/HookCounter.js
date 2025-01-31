import React, { useState } from 'react'

function HookCounter() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    return (
        <>
            {/* Unsafe method */}
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(prev => prev - 1)} >Decrement</button>
            <button onClick={() => setCount(prev => prev + 1)} >Increment</button><br/>
            <button onClick={() => setCount(initialCount)} >Reset</button>
        </>
    )
}

export default HookCounter
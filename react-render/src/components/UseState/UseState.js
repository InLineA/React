import React, { useState } from 'react'

export const UseState = () => {
    const [count, setCount] = useState(0)

    console.log('UseState render')

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(prev => prev + 1)} >Increment</button>  
            <button onClick={() => setCount(0)} >Set to 0</button> 
            <button onClick={() => setCount(5)} >Set to 5</button> 
        </>
    )
}

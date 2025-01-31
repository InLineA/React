import React, { useState, useEffect } from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect - updating document title file')
        document.title = `You clicked ${count} times`
    }, [count])

    return (
        <>
            <h1 onClick={() => {setCount((prev) => prev + 1)}} >Count: {count}</h1>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
        </>
    )
}

export default HookCounter
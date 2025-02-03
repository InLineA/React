import React from 'react'
import useCounter from '../../hooks/useCounter'

function CounterOne() {
    const [count, setCount] = useCounter(1000, 100)

    return (
        <div>
            Count: {count}
            <button onClick={setCount.increment} >Increment</button>
            <button onClick={setCount.decrement} >Decrement</button>
            <button onClick={setCount.reset} >Reset</button>
        </div>
    )
}

export default CounterOne
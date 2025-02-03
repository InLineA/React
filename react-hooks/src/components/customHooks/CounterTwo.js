import React from 'react'
import useCounter from '../../hooks/useCounter'

function CounterTwo() {
    const [count, setCount] = useCounter(10,5)

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={setCount.increment} >Inc</button>
            <button onClick={setCount.decrement} >Dec</button>
            <button  onClick={setCount.reset} >Res</button>
        </div>
    )
}

export default CounterTwo
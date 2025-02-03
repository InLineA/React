import React, { useState, useMemo } from 'react'

function Conter() {
    const [count, setCount] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const incrementOne = () => {
        setCount(prev => prev + 1)
    }
    const incrementTwo = () => {
        setCountTwo(prev => prev + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        //complicated logic sim
        while(i < 2000000000){
            i++
        }
        return count % 2 === 0
    }, [count])
     

    return (
        <div>
            <div>
                <h2>{count}</h2>
                <button onClick={incrementOne}>Inc count One</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <h2>{countTwo}</h2>
                <button onClick={incrementTwo}>Inc count Two</button>
            </div>
        </div>
    )
}

export default Conter
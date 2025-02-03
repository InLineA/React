import React, { useEffect, useState, useRef } from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prev => prev + 1)
        }, 1000)
        return () => clearInterval(intervalRef.current)
    }, [])

    return (
        <div>
            <h1>Hook timer: {timer}</h1>
            <button onClick={() => clearInterval(intervalRef.current)}>Clear timer</button>
        </div>
    )
}

export default HookTimer
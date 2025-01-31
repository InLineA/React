import React, { useState, useEffect } from 'react'

function HookTimer() {
    const [time, setTime] = useState(0)

    const tick = () => {
        console.log('tick')
        setTime(prev => prev + 1)
    }

    useEffect(() => {
        const timer = setInterval(tick, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <h1>{time}</h1>
    )
}

export default HookTimer
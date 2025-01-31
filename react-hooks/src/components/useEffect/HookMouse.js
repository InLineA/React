import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('Use effect called')
        window.addEventListener('mousemove', logMousePosition)
        return () => {
            console.log('Component unmount')
            window.removeEventListener('mousemove', logMousePosition)
        } 
    }, [])

    return (
        <h1>X - {x}; Y - {y}</h1>
    )
}

export default HookMouse
import { useState} from 'react'

function useCounter(initialValue = 0, value = 1) {
    const [count, setCount] = useState(initialValue)

    const inc = () => {
        setCount(prev => prev + value)
    }
    const dec = () => {
        setCount(prev => prev - value)
    }
    const res = () => {
        setCount(initialValue)
    }

    return [count, { increment: inc, decrement: dec, reset: res }]
}

export default useCounter
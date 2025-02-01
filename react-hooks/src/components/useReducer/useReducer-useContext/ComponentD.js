import React, { useContext } from 'react'
import { CountContext } from '../../../App'

function ComponentD() {
    const countContext = useContext(CountContext)

    return (
        <>
            <div>ComponentD count: {countContext.countState}</div>
            <button onClick={() => countContext.countDispatch('increment')} >IncD</button>
            <button onClick={() => countContext.countDispatch('decrement')} >DecD</button>
            <button onClick={() => countContext.countDispatch('reset')} >ResD</button>
        </>
    )
}

export default ComponentD
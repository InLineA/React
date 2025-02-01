import React, { useContext } from 'react'
import { CountContext } from '../../../App'

function ComponentF() {
    const countContext = useContext(CountContext)

    return (
        <div>
            ComponentF count: {countContext.countState}<br />
            <button onClick={() => countContext.countDispatch('increment')} >IncF</button>
            <button onClick={() => countContext.countDispatch('decrement')} >DecF</button>
            <button onClick={() => countContext.countDispatch('reset')} >ResF</button>
        </div>
    )
}

export default ComponentF
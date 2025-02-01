import React, { useContext } from 'react'
import { CountContext } from '../../../App'

function ComponentA() {
    const countContext = useContext(CountContext)

    return (
        <div>
            ComponentA recieved count: {countContext.countState}<br />
            <button onClick={() => countContext.countDispatch('increment')} >IncA</button>
            <button onClick={() => countContext.countDispatch('decrement')} >DecA</button>
            <button onClick={() => countContext.countDispatch('reset')} >ResA</button>
        </div>
    )
}

export default ComponentA
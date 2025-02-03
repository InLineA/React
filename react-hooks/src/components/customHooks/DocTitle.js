import React, { useState  } from 'react'
import useDocumentTitle from '../../hooks/useDocumentTitle'

function DocTitle() {
    const [count, setCount] = useState(0)

    useDocumentTitle(count)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(prev => prev + 1)} >Increment count: {count}</button>
        </div>
    )
}

export default DocTitle
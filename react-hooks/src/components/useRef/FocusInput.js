import React, { useEffect, useRef, useState } from 'react'

function FocusInput() {
    const [inputText, setInputText] = useState('')
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <input type='text' value={inputText} onChange={(e) => setInputText(e.target.value)} ref={inputRef} />
        </div>
    )
}

export default FocusInput
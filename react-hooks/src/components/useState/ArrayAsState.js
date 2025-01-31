import React, { useState } from 'react'

function ArrayAsState() {
    const [currentText, setCurrentText] = useState('')
    const [items, setItems] = useState([])

    const addItem = () => {
        let value = currentText
        if(value === 'козявочка'){
            value='samka bogomola';
        }
        setItems([...items, {
            id: items.length,
            value: value
        }])
        setCurrentText('')
    }

    const enterPressed = (event) => {
        if (event.key === 'Enter'){
            addItem()
        }
    }

    return (
        <div>
            <input type='text' value={currentText} onKeyDown={(event) => enterPressed(event)} onChange={(event) => { setCurrentText(event.target.value) }} />
            <button onClick={addItem}>Add text</button>
            <ul>
                {
                    items.map(item => {
                        return <li key={item.id}>{item.value}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default ArrayAsState
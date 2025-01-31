import React, { useState } from 'react'

function ArrayAsState() {
    const [currentText, setCurrentText] = useState('')
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems( [...items, {
            id: items.length,
            value: currentText
        }] )
        setCurrentText('')
    }

    return (
        <div>
            <input type='text' value={currentText} onChange={(event) => {setCurrentText(event.target.value)}}/>
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
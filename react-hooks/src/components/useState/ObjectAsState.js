import React, { useState } from 'react'

function ObjectAsState() {
    const [names, setNames] = useState({ fistName: '', lastName: '' })
    return (
        <form>
            <input 
                type='text' 
                value={names.fistName} 
                onChange={event => setNames({ ...names, fistName: event.target.value })} 
            />
            <input 
                type='text' 
                value={names.lastName} 
                onChange={event => setNames({ ...names, lastName: event.target.value })} 
            />
            <h2>Your fist name is - {names.fistName}</h2>
            <h2>Your last name is - {names.lastName}</h2>
            <h3>{JSON.stringify(names)}</h3>
        </form>
    )
}

export default ObjectAsState
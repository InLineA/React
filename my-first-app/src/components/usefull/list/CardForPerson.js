import React from 'react'

function CardForPerson(props) {
    const {name, age, skill} = props.person;

    return (
        <div style={{backgroundColor: 'pink', padding: 20, flex: 1, borderWidth: 2, borderColor: 'black', borderStyle: 'solid'}}>
            <h1>{name}</h1>
            <h2>Age: {age}</h2>
            <h3>Proficient in {skill}</h3>
        </div>
    )
}

export default CardForPerson
import React from 'react'
import CardForPerson from './CardForPerson'

function List() {
    const list = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Tamara',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Bob',
            age: 38,
            skill: 'C++'
        },
        {
            id: 4,
            name: 'Anton',
            age: 65,
            skill: 'Assembly'
        }
    ]
    const jsxList = list.map(item => <CardForPerson person={item} key={item.id} />)

    return <div style={{display:'flex', justifyContent: 'space-between', padding: 20    }}>{jsxList}</div>
}

export default List
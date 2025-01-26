import React from 'react'

function Row() {
    const items = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    return (
        <tr>
            {items.map((item, index) => <td key={index}>{item}</td>)}
            <td>Annual</td>
        </tr>
    )
}

export default Row
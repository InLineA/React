import React from 'react'

const WithoutJSX = () => {
    return React.createElement(
        'div', 
        {id: 'without', className: 'JSX'}, 
        React.createElement('h1', null, 'Element without JSX')
    )
}

export default WithoutJSX;
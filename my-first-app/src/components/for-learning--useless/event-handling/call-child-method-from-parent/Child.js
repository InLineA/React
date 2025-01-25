import React from 'react'

function Child(props) {
  return (
    <div>
        <button onClick={() => props.clickHandler('Child')}>Send my name to parrent</button>
    </div>
  )
}

export default Child
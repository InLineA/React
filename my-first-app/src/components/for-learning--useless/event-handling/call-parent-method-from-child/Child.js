import React from 'react'

function Child(props) {
  return (
    <div>
        <button onClick={props.clickHandler}>Send prop to parrent</button>
    </div>
  )
}

export default Child
import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('Button clicked (func)')
    }

    return (
        <div>
            <button onClick={clickHandler}>Function click</button>
        </div>
    )
}

export default FunctionClick
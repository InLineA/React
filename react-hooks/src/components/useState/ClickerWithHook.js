import React, {useState} from 'react'

function ClickerWithHook() {

    const [count, setCount] = useState(0)

// 
// 
// 
//   UNSAFE METHOD
// 
// 
// 


    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>
    )
}

export default ClickerWithHook
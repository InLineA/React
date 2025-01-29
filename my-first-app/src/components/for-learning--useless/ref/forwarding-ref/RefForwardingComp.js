import React from 'react'

// function RefForwardingComp(props) {
//     return (
//         <input type='text' placeholder=':('/>
//     )
// }

const RefForwardingComp = React.forwardRef((props, ref) => {
    return (
        <input type='text' ref={ref}/>
    )
}) 

export default RefForwardingComp
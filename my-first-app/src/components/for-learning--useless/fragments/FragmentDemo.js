import React from 'react'

function FragmentDemo() {
    return (
        // new <></> it doesn’t support keys or attributes

        //this way it CAN hold key={} for array mappping
        <React.Fragment>
            <h1>
                FragmentDemo
            </h1>
            <p>This describes the FragmentDemo component</p>
        </React.Fragment>
    )
}

export default FragmentDemo
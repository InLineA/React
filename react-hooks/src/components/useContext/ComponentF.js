import React from 'react'
import { UserContext } from '../../App'

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return <h1>User name: {user}</h1>
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF
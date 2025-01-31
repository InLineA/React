import React, {useContext} from 'react'
import { UserContext } from '../../App'
import ComponentF from './ComponentF'

function ComponentE() {
    const user = useContext(UserContext)

    return (
        <>
            <ComponentF />
            <h1>Better way: {user}</h1>
        </>
    )
}

export default ComponentE 
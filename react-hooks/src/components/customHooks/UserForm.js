import React from 'react'
import useInput from '../../hooks/useInput'

function UserForm() {
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='name'>Name</label><br />
                <input { ...bindFirstName } type='text' name='name' />
            </div>
            <div>
                <label htmlFor='surname'>Surname</label><br />
                <input { ...bindLastName } type='text' name='surname' />
            </div>
            <button type='submit' >Submit</button>
        </form>
    )
}

export default UserForm
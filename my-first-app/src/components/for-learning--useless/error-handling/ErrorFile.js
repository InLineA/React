import React from 'react'

function ErrorFile({heroName}) {
    if(heroName === 'Joker'){
        throw new Error('Not a hero')
    }

    return (
        <h1>Hero: {heroName}</h1>
    )
}

export default ErrorFile
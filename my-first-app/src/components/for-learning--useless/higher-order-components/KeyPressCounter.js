import React, { Component } from 'react'
import withCounter from './withCounter'

class KeyPressCounter extends Component {
    render() {
        const {count, incrementCount} = this.props

        return (
            <>
                <h3>Key pressed {count} times</h3>
                <input type='text' onKeyDown={incrementCount} />
            </>
        )
    }
}

export default withCounter(KeyPressCounter, 11)
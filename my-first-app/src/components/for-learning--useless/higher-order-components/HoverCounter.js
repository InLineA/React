import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
    render() {
        const {count, incrementCount} = this.props

        return (
            <h1 onMouseOver={incrementCount}>Hoverd over: {count} times</h1>
        )
    }
}

export default withCounter(HoverCounter, 123)
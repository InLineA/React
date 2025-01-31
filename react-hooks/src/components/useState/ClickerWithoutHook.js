import React, { Component } from 'react'

class ClickerWithoutHook extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            count: 0
        }
    }

    clickHandler = () => {
        this.setState(prev => ({count: prev.count + 1}))
    }

    render() {
        return (
            <button onClick={this.clickHandler}>Clicked {this.state.count} times</button>
        )
    }
}

export default ClickerWithoutHook
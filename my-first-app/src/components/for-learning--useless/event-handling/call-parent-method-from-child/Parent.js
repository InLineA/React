import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            parentName: 'Parent'
        }
    }

    greetParent = () => {
        alert(`Hello, ${this.state.parentName}!`)
    }

    render() {
        return (
            <div>
                <Child clickHandler={this.greetParent} />
            </div>
        )
    }
}

export default Parent
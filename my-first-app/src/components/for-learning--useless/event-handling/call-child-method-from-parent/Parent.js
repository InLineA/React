import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            parentName: 'Parent'
        }
    }

    greetParent = (childName) => {
        alert(`Hello, ${this.state.parentName}, from ${childName}!`)
    }

    render() {
        return (
            <div>
                <Child clickHandler={this.greetParent}/>
            </div>
        )
    }
}

export default Parent
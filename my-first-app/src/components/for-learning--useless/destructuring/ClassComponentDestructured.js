import React, { Component } from 'react'

class ClassComponentDestructured extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            firstName: 'Yauheni',
            secondName: 'Prakapenia'
        }
    }

    render() {
        const {className, message} = this.props;
        const {firstName, secondName} = this.state;

        return (
            <div>
                <h1 className={className}>{message}</h1>
                <h3>State 1: {firstName}, State 2: {secondName}</h3>
            </div> 
        )
    }
}

export default ClassComponentDestructured
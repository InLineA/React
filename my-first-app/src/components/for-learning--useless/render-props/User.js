import React, { Component } from 'react'

class User extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            
        }
    }

    render() {
        return (
            <p>Hello, {this.props.render()}!</p>
        )
    }
}

export default User
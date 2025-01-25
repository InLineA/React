import React, { Component } from 'react'

export class Hello extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        return(
            this.state.isLoggedIn && <h1>Hello, USER</h1>
        )
    }
}

export default Hello
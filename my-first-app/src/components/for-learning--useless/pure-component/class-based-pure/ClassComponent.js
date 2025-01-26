import React, { Component } from "react";

class ClassComponent extends Component {
    render() {
        console.log('Regular class component render()')
        return <h1>Class Component {this.props.name}</h1>
    }
}

export default ClassComponent;
import React, { Component } from 'react'
import RefWithClass from './RefWithClass'

class RefWithClassParrent extends Component {
    constructor(props) {
        super(props)
        
        this.classRef = React.createRef()
    }

    clickHandler = () => {
        this.classRef.current.focusInput()
    }

    render() {
        return (
            <div>
                <RefWithClass ref={this.classRef} />
                <button onClick={this.clickHandler}>Focus input</button>
            </div>
        )
    }
}

export default RefWithClassParrent
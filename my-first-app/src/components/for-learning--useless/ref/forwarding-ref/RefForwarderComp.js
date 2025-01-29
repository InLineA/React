import React, { Component } from 'react'
import RefForwardingComp from './RefForwardingComp'

class RefForwarderComp extends Component {
    constructor(props) {
        super(props)
    
        this.hRef = React.createRef()
    }

    //Always do handlers as arrow func
    clickHandler = () => {
        this.hRef.current.value = 'Suck my D'
    }

    render() {
        return (
            <>
                <RefForwardingComp  ref={this.hRef}/>
                <button onClick={this.clickHandler}>Click me!</button>
            </>
        )
    }
}

export default RefForwarderComp
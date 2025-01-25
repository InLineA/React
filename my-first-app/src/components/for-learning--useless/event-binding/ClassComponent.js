import React, { Component } from 'react'

class ClassComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            message: 'First message'
        }

        // Oficial way BINDING this to handler once
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState(
    //         () => ({
    //             message: 'Second message'
    //         }),
    //         () => {
    //             console.log('state has been changed')
    //         }
    //     )

    //     console.log(this);
    // }

    
    clickHandler = () => {
        this.setState(
            {message: 'Second message'}
        )
    }
    


    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* 
                    BINDING with .bind()
                    bad for perfomance(in large scale) and crutial for nested children components
                    every time state updates, rerenders component

                    <button onClick={this.clickHandler.bind(this)}>Press me</button> 
                */}
                {/* 
                    BINDING with arrow function
                    also bad for perfomance

                    <button onClick={() => this.clickHandler()}>Press me</button>
                */}
                {/* Oficial way according to docs */}
                <button onClick={this.clickHandler}>Press me</button>
            </div>
        )
    }
}

export default ClassComponent
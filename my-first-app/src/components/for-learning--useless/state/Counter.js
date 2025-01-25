import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    buttonPressHandler(){
        // this.setState(
        //     {
        //         count: this.state.count + 1
        //     }, 
        //     () => {
        //         console.log('Callback value ' + this.state.count)
        //     }
        // )

        this.setState(
            prevState => ({count: prevState.count + 1}),
            () => {
                console.log('Callback value ' + this.state.count)
            }
        )

        console.log('just access state from handler ' + this.state.count)
    }

    incrementFive(){
        this.buttonPressHandler()
        this.buttonPressHandler()
        this.buttonPressHandler()
        this.buttonPressHandler()
        this.buttonPressHandler()
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => this.incrementFive()}>Add 1</button>
            </div>
        )
    }
}

export default Counter
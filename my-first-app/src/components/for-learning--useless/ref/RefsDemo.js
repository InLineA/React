import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        
        this.inputRef = React.createRef()
    }

    componentDidMount = () => {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    inputSubmitHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <form>
                <label htmlFor='email'>E-mail</label>
                <input type='text' id='email' ref={this.inputRef} />
                <button onClick={this.inputSubmitHandler}>Click</button>
            </form>
            
        )
    }
}

export default RefsDemo
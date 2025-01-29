import React, { Component } from 'react'

class RefWithClass extends Component {
    constructor(props) {
      super(props)
    
      this.classRef = React.createRef()
    }

    focusInput(){
        this.classRef.current.focus()
    }

    render() {
        return (
            <input type="text" ref={this.classRef} />   
        )
    }
}

export default RefWithClass
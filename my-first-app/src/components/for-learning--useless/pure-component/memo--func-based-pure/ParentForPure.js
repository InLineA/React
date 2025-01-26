import React, { Component } from 'react'
import MemoComponent from './MemoComponent'

class ParentForPure extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: 'Jack'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({name: 'Jack'})
        }, 2000)
    }

    render() {
        console.log('************************Parent render()****************************')
        return (
            <>
                <MemoComponent name={this.state.name}/>
            </>
        )
    }
}

export default ParentForPure
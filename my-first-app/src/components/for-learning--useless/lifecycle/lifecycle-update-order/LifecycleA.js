import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: 'Yauheni'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }

    componentWillUnmount(){
        console.log('LifecycleA componentWillUnmount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    btnChangeStateHandler = (event) => {
        this.setState({name: 'Jeka'})
    }

    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <h1>LifecycleA</h1>
                <button onClick={this.btnChangeStateHandler}>Change state to cause update</button>
                <LifecycleB />
            </div>  
        )
    }
}

export default LifecycleA
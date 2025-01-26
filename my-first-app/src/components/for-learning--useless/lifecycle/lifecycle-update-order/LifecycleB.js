import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: 'Yauheni'
        }
        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }

    componentWillUnmount(){
        console.log('LifecycleB componentWillUnmount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')
    }

    render() {
        console.log('LifecycleB render')
        return (
            <h1>LifecycleB</h1>
        )
    }
}

export default LifecycleB
import React, { Component } from 'react';

const withCounter = (WrappedComponent, incrementNumber) => {
    class WithCounter extends Component {
        constructor(props) {
            super(props)
            
            this.state = {
                count: 0
            }
        }

        addCountHandler = () => {
            this.setState(prev => ({count: prev.count + incrementNumber}))
        }

        render(){
            return <WrappedComponent 
                        count={this.state.count} 
                        incrementCount={this.addCountHandler} 
                        {...this.props} //DO NOT FORGET TO PASS ALL PROPS
                    />
        }
    }

    return WithCounter
}

export default withCounter
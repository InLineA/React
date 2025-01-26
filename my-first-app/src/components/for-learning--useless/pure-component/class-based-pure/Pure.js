import React, { PureComponent } from 'react'

class Pure extends PureComponent {
    render() {
        console.log('Pure component render()')
        return (
            <h1>Pure component {this.props.name}</h1>
        )
    }
}

export default Pure
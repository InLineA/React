import React, { Component } from 'react'
import './styles.css'

class Form extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            email: '',
            description: '',
            selected: 'cs',
        }
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value })
    }
    changeDescriptionHandler = (event) => {
        this.setState({ description: event.target.value })
    }
    selectHandler = (event) => {
        this.setState({ selected: event.target.value })
    }
    submitHandler = (event) => {
        alert(`email: ${this.state.email}, description: ${this.state.description}, game: ${this.state.selected}`)
        event.preventDefault()
    }

    render() {
        const {email, description, selected} = this.state

        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label for='email' className='label'>Email</label>
                    <input type='email' name='email' value={email} onChange={this.changeEmailHandler} placeholder='Enter your E-mail' className='input' />
                </div>

                <div>
                    <label for='desc' className='label'>Description</label>
                    <input type='text-area' name='desc' value={description} onChange={this.changeDescriptionHandler} placeholder='Enter Description' className='input' />
                </div>
                
                <select name='game' value={selected} onChange={this.selectHandler} className='input'>
                    <option value='dota'>Dota 2</option>
                    <option value='cs'>CS 2</option>
                    <option value='hl'>Half Life 2</option>
                </select>

                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form
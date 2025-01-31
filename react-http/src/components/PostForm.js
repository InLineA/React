import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {console.log(response)})
            .catch(error => {console.log(error)})
    }

    inputHandler = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }

    render() {
        const { userId, title, body } = this.state

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type='text' name='userId' value={userId} onChange={this.inputHandler} />
                    <input type='text' name='title' value={title} onChange={this.inputHandler} />
                    <input type='text' name='body' value={body} onChange={this.inputHandler} />
                    <input type='submit' value='Submit!' />
                </form>
            </div>
        )
    }
}

export default PostForm
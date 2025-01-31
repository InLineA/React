import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            posts: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({ posts: response.data })
            })
            .catch((error) => {
                console.log(error)
                this.setState({ errorMsg: 'Error while retreiving data' })
            })
    }

    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                <h1>Posts:</h1>
                {
                    posts.length ? 
                    posts.map(post => 
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    ) : 
                    null
                }
                { errorMsg ? <h1>{errorMsg}</h1> : null }
            </div>
        )
    }
}

export default PostList
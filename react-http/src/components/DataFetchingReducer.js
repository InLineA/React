import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'

const initialValue = []
const dispatch = (currentState, action) => {
    switch(action.type){
        case 'append':
            return [ ...currentState, action.post ]
        case 'addfirst':
            return [ action.post, ...currentState ]
        case 'replace':
            return action.data
        case 'reset':
            return initialValue
        default:
            return currentState
    }
}

function DataFetchingReducer() {
    const [posts, dispatchPosts] = useReducer(dispatch, initialValue)

    //initial data fetch
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(responce => {
                dispatchPosts({ type: 'replace', data: responce.data })
            })
            .catch(error => console.log(error))
    }, [])

    //data fetch by id if user press the append button
    const [id, setId] = useState(NaN)
    useEffect(() => {
        if(id > 0 && id <= 100){
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(responce => {
                dispatchPosts({ type: 'addfirst', post: responce.data })
            })
            .catch(error => console.log(error))
        }
    }, [id])


    const [inputText, setInputText] = useState('')
    return (
        <div>
            <h1>DataFetching with useReducer() hook</h1>
            <input type='text' value={inputText} onChange={(e) => {setInputText(e.target.value)}} />
            <button onClick={() => setId(inputText)} >Append</button>
            {/* If have posts data will render it as unOrderedList */}
            {    
                posts.length ?
                <ul>{
                    posts.map((post, index) => 
                        <li key={index + 1} style={{textAlign: 'justify', width: '30%'}}>
                            <h3>{`${index + 1}. ${post.title}`}</h3>
                            <p>{post.body}</p>
                        </li>
                    )
                }</ul> :
                null
            }
        </div>
    )
}

export default DataFetchingReducer
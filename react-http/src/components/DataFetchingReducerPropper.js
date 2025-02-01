import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    post: {},
    error: ''
}
const reducer = (currentState, action) => {
    switch(action.type){
        case 'FETCH_SSUCCESS':
            return {  
                loading: false , post: action.payload, error: ''
            }
        case 'FETCH_ERROR':
            return {  
                loading: false, post: {}, error: 'something went wrong'
            }
        default:
            return currentState
    }
}

function DataFetchingReducerPropper() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch({ type: 'FETCH_SSUCCESS', payload: response.data })
            })
            .catch(() => dispatch({ type: 'FETCH_ERROR' }))
    }, [])

    return (
        <div>
            {/* Messy i dount like */}
            {state.loading ? <h1>Loading...</h1> :
                <>
                    <h1>{state.post.id + '. ' + state.post.title}</h1>
                    <h3>{state.post.body}</h3> 
                </>
            }
            {state.error ? <h1>{state.error}</h1> : null}
        </div>
    )
}

export default DataFetchingReducerPropper
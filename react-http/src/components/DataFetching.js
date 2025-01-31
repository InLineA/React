import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)
    const [data, setData] = useState({})

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(responce => {
                console.log('Data fetch')
                setData(responce.data)
            })
            .catch(error => console.log(error))
    }, [idFromButtonClick])

    return (
        <>
            <input type='number' value={id} onChange={(e) => {setId(e.target.value)}} />
            <button type='button' onClick={handleClick}>Fetch post</button>
            <div>
                <h3>{data.title}</h3>
                <p>{data.body}</p>
            </div>
            {/* <ol>
                {
                    data.length ? 
                    data.map(post => 
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    ) : 
                    null
                } 
            </ol> */}
        </>
    )
}

export default DataFetching
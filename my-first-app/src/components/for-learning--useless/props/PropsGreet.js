import React from 'react';

const PropsGreet = (props) => {
    return(
        <div>
            <h1>
                Hello, {props.name}.<br />
            </h1>
            <h3>
                Your rapid rating according to 
                <a href='https://chess.com' style={{padding: 10}}>
                    Chess.com
                </a>
                is {props.rapidRating}
            </h3>
            {props.children}
        </div>   
    )
}

export default PropsGreet;
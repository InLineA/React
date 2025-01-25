import React, { Component } from "react";

class ClassPropsGreet extends Component{
    render(){
        return(
            <div>
                <h1>
                    Hello, {this.props.name}.<br />
                </h1>
                <h3>
                    Your rapid rating according to 
                    <a href='https://chess.com' style={{padding: 10}}>
                        Chess.com
                    </a>
                    is {this.props.rapidRating}
                </h3>
                {this.props.children}
            </div>   
        )
    }
}

export default ClassPropsGreet;
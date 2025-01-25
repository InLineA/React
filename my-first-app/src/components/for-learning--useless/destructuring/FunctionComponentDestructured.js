import React from 'react'

// const FunctionComponentDestructured = props => {
//   return (
//     <h1 className={props.className}>{props.message}</h1>
//   )
// }

// const FunctionComponentDestructured = ({className, message}) => {
//     return (
//       <h1 className={className}>{message}</h1>
//     )
// }

const FunctionComponentDestructured = props => {
    const {className, message} = props;

    return (
    <h1 className={className}>{message}</h1>
    )
}

export default FunctionComponentDestructured
import React, { useReducer } from 'react';
import ComponentA from './components/useReducer/useReducer-useContext/ComponentA';
import ComponentB from './components/useReducer/useReducer-useContext/ComponentB';
import ComponentC from './components/useReducer/useReducer-useContext/ComponentC';

const initialState = 0
const reducer = (currentState, action) => {
  switch(action){
    case 'increment':
      return currentState + 1
    case 'decrement':
      return currentState - 1
    case 'reset':
      return initialState
    default:
      return currentState
  }
}

export const CountContext = React.createContext()

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch}}>
        <h1>Count: {count}</h1>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
}

export default App;

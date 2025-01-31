import React from 'react';
import ComponentC from './components/useContext/ComponentC';

export const UserContext = React.createContext()

function App() {
  return (
    <div>
      <UserContext.Provider value={'Jack'}>
        <ComponentC />
      </UserContext.Provider>
    </div>
  );
}

export default App;

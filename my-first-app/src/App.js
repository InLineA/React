import React from 'react';
import './App.css';
import ComponentC from './components/for-learning--useless/context/ComponentC';
import { UserProvider } from './components/for-learning--useless/context/userContext';


function App() {
  return (
    <div className="App">
      <UserProvider value="Yauheni">
        <ComponentC />
      </UserProvider>
    </div>  
  );
}

export default App;

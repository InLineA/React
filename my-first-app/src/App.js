import React from 'react';
import './App.css';
import ClickCounter from './components/for-learning--useless/higher-order-components/ClickCounter';
import HoverCounter from './components/for-learning--useless/higher-order-components/HoverCounter';
import KeyPressCounter from './components/for-learning--useless/higher-order-components/KeyPressCounter';

function App() {
  return (
    <div className="App">
      <ClickCounter countNumber={5} />
      <HoverCounter />
      <KeyPressCounter countNumber={2} />
    </div>
  );
}

export default App;

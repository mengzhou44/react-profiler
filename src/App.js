import React, { Profiler } from 'react';
import Counter from './counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Profiler
        id="myProfier"
        onRender={(id, phase, actualTime) => {
          console.log(`profiler id ${id}`);
          console.log(phase);
          console.log(actualTime);
        }}
      >
        <Counter />
      </Profiler>
    </div>
  );
}

export default App;

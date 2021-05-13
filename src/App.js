import randomColor from 'randomcolor';
import React, { useState } from 'react';
import './App.css';

export default App;

function RandomColoredElement() {
  const [randomHexColor, setRandomHexColor] = useState(randomColor());
  return (
    <div>
      <div style={{ backgroundColor: randomHexColor }} className="colorField">
        <p>{randomHexColor}</p>
      </div>
      <br />
      <button
        onClick={() => {
          setRandomHexColor(randomColor());
        }}
      >
        Get your random color
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">RANDOM COLOR GENERATOR</header>
      <body className="App-body">
        <RandomColoredElement />
      </body>
    </div>
  );
}

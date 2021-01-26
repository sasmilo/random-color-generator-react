import randomcolor from "randomcolor";
import React, { useState } from "react";
import "./App.css";

export default App;

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">RANDOM COLOR GENERATOR</header>
        <body className="App-body">
          <RandomColoredElement />
        </body>
      </div>
    </>
  );
}

function RandomColoredElement() {
  const [randomHexColor, setRandomColor] = useState(randomcolor());
  return (
    <div>
      <div style={{ backgroundColor: randomHexColor }} className="colorField">
        <p>{randomHexColor}</p>
      </div>
      <br />
      <button
        onClick={() => {
          setRandomColor(randomcolor());
        }}
      >
        Get your random color
      </button>
    </div>
  );
}

import randomcolor from 'randomcolor';
import React from 'react';
import './App.css';

export default App;


function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <RandomColor />
        </header>
      </div>
    </>
  );
}

function RandomColor() {
  const [randomColor, setRandomColor] = useState(randomcolor());
  return (
    <div>
      <div style={{ backgroundColor: randomColor }} className="colorField">
        <p>{randomColor}</p>
      </div>
      <button
        onClick={() => {
          setRandomColor(randomcolor());
        }}
      >
        Hit this button and get your random color
      </button>

    </div>
  );
}

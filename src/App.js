/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import randomColor from 'randomcolor';
import { useState } from 'react';
import './App.css';

export default App;

const ourBlue = '#061b46';
const lightGray = 'lightgrey';
const ourOrange = 'orange';

const appStyles = css`
  text-align: center;
  align-items: center;
  background-color: ${ourBlue};
  padding: 50px 0;

  p {
    background-color: #061b46;
    border-radius: 5px;
    padding: 5px;
    font-size: calc(5px + 4vmin);
  }
`;

const headerStyles = css`
  background-color: ${ourBlue};
  border-radius: 5px;
  min-height: 1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(20px + 3vmin);
  font-weight: 900;
  color: ${lightGray};
  font-family: 'Lato', 'Montserrat', 'Segoe UI', 'Roboto', 'Oxygen',
    'Helvetica Neue', sans-serif;
`;

const boxStyles = css`
  border: solid;
  border-color: ${lightGray};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${lightGray};
`;

const inputStyles = css`
  padding: 10px 5px;
  margin: 0 5px;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${ourBlue};
    font-size: calc(5px + 2vmin);
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${ourBlue};
    font-size: calc(5px + 2vmin);
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${ourBlue};
    font-size: calc(5px + 2vmin);
  }
`;

const textStyles = css`
  color: ${lightGray};
  font-size: calc(10px + 2vmin);
  padding: 0 5px;
`;

const buttonStyles = css`
  background-color: ${ourOrange};
  border: none;
  border-radius: 5px;
  color: ${ourBlue};
  font-size: calc(10px + 2vmin);
  padding: 5px 15px;
  margin-bottom: 15px;
  margin-left: 10px;
  cursor: pointer;
`;

const optionStyles = css`
  color: ${ourBlue};
  font-size: calc(5px + 2vmin);
`;

const positionStyles = css`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

function RandomColoredElement() {
  const [randomHexColor, setRandomHexColor] = useState(randomColor());
  const [boxWidth, setBoxWidth] = useState(300);
  const [boxHeight, setBoxHeight] = useState(200);
  const [luminosity, setLuminosity] = useState('');
  const [hue, setHue] = useState('');

  return (
    <div>
      <div css={positionStyles}>
        <div
          style={{
            backgroundColor: randomHexColor,
            width: `${boxWidth}px`,
            height: `${boxHeight}px`,
          }}
          css={boxStyles}
        >
          <p>{randomHexColor}</p>
        </div>
      </div>
      <br />
      <span css={textStyles}>Hue:</span>
      <select
        css={optionStyles}
        onChange={(event) => {
          const newHue = event.target.value;
          setHue(newHue);
        }}
      >
        <option value="random">Doesn't matter</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="purple">Red</option>
        <option value="pink">Purple</option>
        <option value="monochrome ">Monochrome</option>
      </select>

      <span css={textStyles}>Luminosity:</span>
      <select
        css={optionStyles}
        onChange={(event) => {
          const newLuminosity = event.target.value;
          setLuminosity(newLuminosity);
        }}
      >
        <option value="random">Doesn't matter</option>
        <option value="bright">Bright</option>
        <option value="light ">Light </option>
        <option value="dark">Dark</option>
      </select>
      <button
        css={buttonStyles}
        onClick={() => {
          setRandomHexColor(
            randomColor({
              luminosity: `${luminosity}`,
              hue: `${hue}`,
            }),
          );
        }}
      >
        Change to random color
      </button>
      <br />
      <div css>
        <span css={textStyles}>Define color field dimensions:</span>
        <input
          css={inputStyles}
          type="text"
          placeholder="Width (px)"
          onKeyDown={(event) => {
            const newWidth = event.target.value;
            if (event.key === 'Enter') {
              setBoxWidth(newWidth);
            }
          }}
        />
        <span css={textStyles}>x</span>
        <input
          css={inputStyles}
          type="text"
          placeholder="Height (px)"
          onKeyDown={(event) => {
            const newHeight = event.target.value;
            if (event.key === 'Enter') {
              setBoxHeight(newHeight);
            }
          }}
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <div css={appStyles}>
      <header css={headerStyles}>RANDOM COLOR GENERATOR</header>
      <body>
        <RandomColoredElement />
      </body>
    </div>
  );
}

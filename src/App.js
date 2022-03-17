import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('blue')
  const [isDisabled, setIsDisabled] = useState(false)

  const handleClick = (event) => {
    if(color === 'red') {
      setColor('blue')
  } else {
    setColor('red')
  }
}

  const handleCheck = () => {
    setIsDisabled((prevState) => !prevState)
  }

  return (
    <div>
      <button disabled={isDisabled} onClick={handleClick} style={{backgroundColor: color === 'red'?'blue': 'red', color:isDisabled?'grey':'red'}}>Change to {color}</button>
      <input  id="disable-button-checkbox" onClick={handleCheck} type='checkbox' />
      <label htmlFor="disable-button-checkbox">Disable button</label>
      </div>
  );
}

export default App;

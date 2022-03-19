import './App.css';
import { useState } from 'react';

export const replaceCamelWithSpaces =(colorName)=> {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [color, setColor] = useState('MidnightBlue')
  const [isDisabled, setIsDisabled] = useState(false)

  const handleClick = (event) => {
    if(color === 'MediumVioletRed') {
      setColor('MidnightBlue')
  } else {
    setColor('MediumVioletRed')
  }
}

  const handleCheck = () => {
    setIsDisabled((prevState) => !prevState)
  }



  return (
    <div>
      <button disabled={isDisabled} onClick={handleClick} style={{backgroundColor: color === 'MediumVioletRed'?'MidnightBlue': 'MediumVioletRed', color:isDisabled?'grey':'MediumVioletRed'}}>Change to {replaceCamelWithSpaces(color)}</button>
      <input  id="disable-button-checkbox" onClick={handleCheck} type='checkbox' />
      <label htmlFor="disable-button-checkbox">Disable button</label>
      </div>
  );
}

export default App;

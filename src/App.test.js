import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from './App'

test('button has correct initial color', () => {
  render(<App />);
  // find element with role of button and text change
  const button = screen.getByRole('button', {name:'Change to Midnight Blue'})
  expect(button).toHaveStyle({backgroundColor:'MediumVioletRed'})

  fireEvent.click(button);
  expect(button).toHaveStyle({backgroundColor:'MidnightBlue'});
  expect(button.textContent).tàoBe('Change to Medium Violet Red');

});


test('button has correct uncheck status', () => {
  render(<App />);
  const button = screen.getByRole('button', {name:'Change to Midnight Blue'})
  expect(button).toBeEnabled()
})
test('checkbox disables button on first click and reables button on second click', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const button = screen.getByRole('button');
  // button is disabled
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();
  // button is abled 
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(button).toBeEnabled();
  
})

test('disabling the button turns its grey, enabling the button turns it red', () => {
  render(<App />);
  const button = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox', {name:'Disable button'})
  expect(button).toHaveStyle({color:'MediumVioletRed'})
  expect(button).toBeEnabled()

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({color:'grey'})
  expect(button).toBeDisabled()

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({color:'MediumVioletRed'})
  expect(button).toBeEnabled()


})


describe('spaces before camel-case capital letters', () => {

  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')

  })
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')

  })
})
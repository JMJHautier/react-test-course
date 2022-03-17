import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  // find element with role of button and text change
  const button = screen.getByRole('button', {name:'Change to blue'})
  expect(button).toHaveStyle({backgroundColor:'red'})

  fireEvent.click(button);
  expect(button).toHaveStyle({backgroundColor:'blue'});
  expect(button.textContent).toBe('Change to red');

});


test('button has correct uncheck status', () => {
  render(<App />);
  const button = screen.getByRole('button', {name:'Change to blue'})
  expect(button).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');

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
  expect(button).toHaveStyle({color:'red'})
  expect(button).toBeEnabled()

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({color:'grey'})
  expect(button).toBeDisabled()

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({color:'red'})
  expect(button).toBeEnabled()


})
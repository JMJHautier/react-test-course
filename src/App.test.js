import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  // find element with role of button and text change
  const button = screen.getByRole('button', {name:'Change to Midnight Blue'})
  expect(button).toHaveStyle({backgroundColor:'MediumVioletRed'})

  fireEvent.click(button);
  expect(button).toHaveStyle({backgroundColor:'MidnightBlue'});
  expect(button.textContent).toBe('Change to Medium Violet Red');

});
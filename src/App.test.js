import { render, screen } from '@testing-library/react';
import App from './App';

test('Is There a button called reserce a table on the main page', () => {
  render(<App />);
  const linkElement = screen.getByText("Reserve a Table");
  expect(linkElement).toBeInTheDocument();
});
test('Is There a button clickable', () => {
  render(<App />);
  const linkElement = screen.getByText("Reserve a Table");
  linkElement.click()
  
  expect(linkElement).toBeInTheDocument();
});

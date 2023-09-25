import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header element', () => {
  render(<App />);
  const headerElement = screen.getByText(/Welcome to My App/i); // Replace with your header text
  expect(headerElement).toBeInTheDocument();
});


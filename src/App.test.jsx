import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component with Drinks list Header', () => {
  render(<App />);
  const headerElement = screen.getByText(/drinks list/i);
  expect(headerElement).toBeInTheDocument();
});

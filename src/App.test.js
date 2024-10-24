import { render, screen } from '@testing-library/react';
import App from './App';

test('renders properly app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Johnny Aguilera/i);
  expect(linkElement).toBeInTheDocument();
});

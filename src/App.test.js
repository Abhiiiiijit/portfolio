import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name and experience section', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Abhijit Bose Das/);
  expect(screen.getByRole('heading', { name: 'Experience' })).toBeInTheDocument();
});

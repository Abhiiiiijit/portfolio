import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero and job section', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Software engineer/);
  expect(screen.getByRole('heading', { name: '01 — Job' })).toBeInTheDocument();
});

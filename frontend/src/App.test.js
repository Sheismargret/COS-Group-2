import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the navigation brand', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const brandElement = screen.getByRole('link', { name: /PAU Connect/i });
  expect(brandElement).toBeInTheDocument();
});

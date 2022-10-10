import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from './index';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  })
});

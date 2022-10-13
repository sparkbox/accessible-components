import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from './index';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  it('renders multiple component cards', () => {
    // test if the Home page has some component cards on it
    render(<Home />);
    const componentCard = screen.getAllByRole('listitem');
    componentCard.forEach((component) => {
      expect(component).toBeInTheDocument();
    });
  });
});

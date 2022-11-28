import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the Header component/link', () => {
    render(<Header />);
    const header = screen.getByText('Accessible Components');
    expect(header).toBeInTheDocument();
  });
});

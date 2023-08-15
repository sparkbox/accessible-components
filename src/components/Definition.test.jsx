import { render, screen } from '@testing-library/react';
import Definition from './Definition';

describe('Definition', () => {
  render(
    <Definition>
      <p>text</p>
    </Definition>,
  );
  const heading = screen.getByTestId('definition-heading');

  it('Renders the definition component', () => {
    expect(heading).toBeInTheDocument();
  });
});

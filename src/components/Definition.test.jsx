import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Definition from './Definition';

describe('Definition', () => {
  act(() => {
    render(
      <Definition>
        <p>text</p>
      </Definition>,
    );
  });
  const heading = screen.getByTestId('definition-heading');

  it('Renders the definition component', () => {
    expect(heading).toBeInTheDocument();
  });
});

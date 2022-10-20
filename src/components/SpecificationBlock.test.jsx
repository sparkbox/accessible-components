import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import SpecificationBlock from './SpecificationBlock';

describe('SpecificationBlock component', () => {
  act(() => {
    render(<SpecificationBlock heading="Focus Expectations" />);
  });
  const heading = screen.queryByTestId('spec-block-heading');
  const content = screen.queryByTestId('spec-block-content');

  it('Component shows correct title', () => {
    expect(heading).toBeTruthy();
  });

  it('Component shows correct content', () => {
    expect(content).toBeTruthy();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import RelatedComponents from './RelatedComponents';

describe('RelatedComponents', () => {
  it("Shouldn't render if props are empty", () => {
    act(() => {
      render(<RelatedComponents components={[]} />);
    });
    const component = screen.queryByTestId('rel-component');
    expect(component).not.toBeInTheDocument();
  });
});

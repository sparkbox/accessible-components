import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import UsageGuidelines from './UsageGuidelines';

describe('UsageGuidelines component', () => {
  act(() => {
    render(
      <UsageGuidelines>
        <h1 data-testid="children">test</h1>
      </UsageGuidelines>,
    );
  });
  const childElement = screen.queryByTestId('children');

  it('Component renders children', () => {
    expect(childElement).toBeTruthy();
  });
});

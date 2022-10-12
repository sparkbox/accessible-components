import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Footer from './Footer';

it('Displays the current year', () => {
  act(() => {
    render(<Footer />);
  });
  const currYear = new Date().getFullYear();
  const yearIsPresent = screen.queryByText(currYear, { exact: false });
  expect(yearIsPresent).toBeTruthy();
});

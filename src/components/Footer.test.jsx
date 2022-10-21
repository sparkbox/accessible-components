import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

it('Displays the current year', () => {
  render(<Footer />);
  const currYear = new Date().getFullYear();
  const yearIsPresent = screen.queryByText(currYear, { exact: false });
  expect(yearIsPresent).toBeTruthy();
});

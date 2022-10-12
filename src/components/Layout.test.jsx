import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Layout from './Layout';

it('Renders a Header component', () => {
  act(() => {
    render(<Layout pageTitle="testTitle" />);
  });
  const header = screen.queryByTestId('header');
  expect(header).toBeTruthy();
});

it('Renders a Footer component', () => {
  act(() => {
    render(<Layout pageTitle="testTitle" />);
  });
  const footer = screen.getByTestId('footer');
  expect(footer).toBeTruthy();
});

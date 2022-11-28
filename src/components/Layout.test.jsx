import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

it('Renders a Footer component', () => {
  render(<Layout pageTitle="testTitle" />);
  const footer = screen.getByTestId('footer');
  expect(footer).toBeTruthy();
});

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CodeBlock from './CodeBlock';

describe('CodeBlock', () => {
  render(<CodeBlock exportedCodeString="<html returned>" />);
  const returnedPreTag = screen.queryByTestId('pre-tag-found');
  const returnedCodeTag = screen.queryByTestId('code-tag-found');
  const returnedCodeBlock = screen.getByRole('code');

  it('returns pre & code tags', () => {
    expect(returnedPreTag).toBeInTheDocument();
    expect(returnedCodeTag).toBeInTheDocument();
  });
  it('returns a block of code based on the string given', () => {
    expect(returnedCodeBlock.innerHTML).toEqual('&lt;html returned&gt;');
  });
});

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CodeBlock from './CodeBlock';

describe('CodeBlock', () => {
  beforeEach(() => {
    render(<CodeBlock exportedCodeString="<html returned>" name="html" />);
  });

  it('returns pre & code tags', () => {
    const returnedPreTag = screen.queryByTestId('pre-tag-found');
    const returnedCodeTag = screen.queryByTestId('code-tag-found');
    expect(returnedPreTag).toBeInTheDocument();
    expect(returnedCodeTag).toBeInTheDocument();
  });
  it('returns a string based on the name prop', () => {
    const returnedName = screen.getByText('html');
    expect(returnedName).toBeInTheDocument();
  });
  it('returns a block of code based on the string given', () => {
    const returnedCodeBlock = screen.getByRole('code');
    expect(returnedCodeBlock.innerHTML).toEqual('&lt;html returned&gt;');
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailsBanner from './DetailsBanner';

it('Displays the banner header based on component name prop', () => {
  const headerText = 'The header';
  render(<DetailsBanner name={headerText} />);

  const headerElement = screen.queryByText(headerText);
  expect(headerElement).toBeInTheDocument();
});

it('Displays the banner image based on component name prop', () => {
  const image = {
    src: 'http://some-url.com/',
    alt: 'test alt tag',
  };
  render(<DetailsBanner image={image} />);

  // from testing-library doc https://testing-library.com/docs/queries/byalttext/
  const bannerImage = screen.getByAltText(image.alt); // pass string in to test
  expect(bannerImage.src).toBe(image.src);
});

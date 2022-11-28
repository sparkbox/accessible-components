import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailsBanner, { isWideImage } from './DetailsBanner';

describe('DetailsBanner', () => {
  it('Displays the banner h1 based on component name prop', () => {
    const headingText = 'The header';
    render(<DetailsBanner name={headingText} />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
  });

  it('Displays the banner image based on component name prop', () => {
    const image = {
      src: 'http://some-url.com/',
      alt: 'test alt tag',
    };
    render(<DetailsBanner image={image} />);

    // from testing-library doc https://testing-library.com/docs/queries/byalttext/
    const bannerImages = screen.getAllByAltText(image.alt); // pass string in to test
    expect(bannerImages[0].src).toBe(image.src);
    expect(bannerImages[1].src).toBe(image.src);
    expect(bannerImages[2].src).toBe(image.src);
  });

  it('returns false when isWideImage is false', () => {
    const interiorHeading = 'Accordion';
    render(<DetailsBanner name={interiorHeading} />);
    const result = isWideImage(interiorHeading);
    expect(result).toBe(false);
  });

  it('returns true when isWideImage is true', () => {
    const interiorHeading = 'Table';
    render(<DetailsBanner name={interiorHeading} />);
    const result = isWideImage(interiorHeading);
    expect(result).toBe(true);
  });

  it('returns 3 images if isWideImage returns false', () => {
    const image = {
      src: 'http://some-url.com/',
      alt: 'test alt tag',
    };
    const interiorHeading = 'Dialog';
    render(<DetailsBanner name={interiorHeading} image={image} />);
    const bannerImages = screen.getAllByAltText(image.alt);
    expect(bannerImages).toHaveLength(3);
  });

  it('returns 1 image if isWideImage returns true', () => {
    const image = {
      src: 'http://some-url.com/',
      alt: 'test alt tag',
    };
    const interiorHeading = 'Tabs';
    render(<DetailsBanner name={interiorHeading} image={image} />);
    const bannerImages = screen.getAllByAltText(image.alt);
    expect(bannerImages).toHaveLength(1);
  });
});

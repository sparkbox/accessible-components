import React from 'react';
import { render, screen } from '@testing-library/react';

import RichText from './RichText';

/* Parsing Tests */
it('Creates <p> elements, given markdown with individual paragraphs', () => {
  const paragraphMd = 'Hello\n\nWorld!';
  const expectedHtml = '<p>Hello</p>\n<p>World!</p>';
  render(<RichText markdown={paragraphMd} />);
  const paragraphOutput = screen.queryByTestId('richtext').innerHTML;
  expect(paragraphOutput).toMatch(expectedHtml);
});

it('Creates <li> elements given markdown with nested bullet points', () => {
  const bulletMd = '- Bullet point one\n- Bullet point two';
  const expectedHtml = '<li>Bullet point one</li>\n<li>Bullet point two</li>';
  render(<RichText markdown={bulletMd} />);
  const bulletPointOutput = screen.queryByTestId('richtext').innerHTML;
  expect(bulletPointOutput).toMatch(expectedHtml);
});

it('Generates <a> tags from markdown with [foo](bar) link syntax', () => {
  const linkMd = '[Link to google](https://www.google.com)';
  const expectedHtml = '<p><a href="https://www.google.com">Link to google</a></p>';
  render(<RichText markdown={linkMd} />);
  const linkOutput = screen.queryByTestId('richtext').innerHTML;
  expect(linkOutput).toMatch(expectedHtml);
});

it('Generates <code> tags from markdown with text in `backticks` and creates necessary HTML entities', () => {
  const codeMd = 'Use the component `<Test/>` around tests!';
  const expectedHtml = '<p>Use the component <code>&lt;Test/&gt;</code> around tests!</p>';
  render(<RichText markdown={codeMd} />);
  const codeTagOutput = screen.queryByTestId('richtext').innerHTML;
  expect(codeTagOutput).toMatch(expectedHtml);
});

it('Replaces double brackets from markdown with <kbd> HTML elements', () => {
  const bracketMd = '[[Enter]] or [[Space]]: some test code';
  const expectedHtml = '<p><kbd>Enter</kbd> or <kbd>Space</kbd>: some test code</p>';
  render(<RichText markdown={bracketMd} />);
  const newKbdElements = screen.queryByTestId('richtext').innerHTML;
  expect(newKbdElements).toMatch(expectedHtml);
});

/* Sanitation */
// This can be adjusted if we decide we need stricter sanitation.
it('Removes dangerous <html>, <body>, and <head> tags from strings, leaving their contents', () => {
  const htmlMd = "Shouldn't <body>have</body> <head>any</head> breaking <html>tags</html> in the output.";
  const expectedHtml = "<p>Shouldn't have any breaking tags in the output.</p>";
  render(<RichText markdown={htmlMd} />);
  const nestedOutput = screen.queryByTestId('richtext').innerHTML;
  expect(nestedOutput).toMatch(expectedHtml);
});

it('Scrubs events, such as onmouseover, that open xss vulnerabilities', () => {
  const htmlMd = '<div onmouseover=alert(`danger!`)></div>';
  const expectedHtml = '<div></div>';
  render(<RichText markdown={htmlMd} />);
  const nestedOutput = screen.queryByTestId('richtext').innerHTML;
  expect(nestedOutput).toMatch(expectedHtml);
});

it('Scrubs script tags that open xss vulnerabilities', () => {
  const htmlMd = '<script>alert(document.cookie)</script>';
  const expectedHtml = '';
  render(<RichText markdown={htmlMd} />);
  const nestedOutput = screen.queryByTestId('richtext').innerHTML;
  expect(nestedOutput).toMatch(expectedHtml);
});

it('Scrubs attributes that open xss vulnerabilities', () => {
  // eslint-disable-next-line quotes
  const htmlMd = `<img src="javascript:alert('XSS');">`;
  const expectedHtml = '<img>';
  render(<RichText markdown={htmlMd} />);
  const nestedOutput = screen.queryByTestId('richtext').innerHTML;
  expect(nestedOutput).toMatch(expectedHtml);
});

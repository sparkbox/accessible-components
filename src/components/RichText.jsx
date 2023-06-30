/* eslint-disable react/no-danger */
// ignoring warning b/c we are sanitizing before setting inner html
import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

export default function RichText({ markdown }) {
  const htmlFromMd = marked.parse(markdown.replace(/\\/g, ''), {
    breaks: true,
    mangle: false,
    headerIds: false,
    headerPrefix: false,
  });
  const withKbdElements = htmlFromMd.replace(/\[\[(.+?)\]\]/g, '<kbd>$1</kbd>');

  const cleanHtml = DOMPurify.sanitize(withKbdElements, {
    FORBID_TAGS: ['title'],
  });
  return (
    <div
      data-testid="richtext"
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
}

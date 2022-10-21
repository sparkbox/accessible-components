/* eslint-disable react/no-danger */
// ignoring warning b/c we are sanitizing before setting inner html
import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

export default function RichText({ markdown }) {
  const htmlFromMd = marked.parse(markdown);
  const cleanHtml = DOMPurify.sanitize(htmlFromMd, { FORBID_TAGS: ['title'] });
  return (
    <div
      data-testid="richtext"
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
}

export default function CodeBlock({ name, exportedCodeString }) {
  return (
    <article className="cmp-code-block">
      <h2 className="cmp-code-block__heading">{name}</h2>
      <section className="cmp-code-block__content">
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
        <pre data-testid="pre-tag-found" tabIndex={0}>
          <code role="code" data-testid="code-tag-found">
            {exportedCodeString}
          </code>
        </pre>
      </section>
    </article>
  );
}

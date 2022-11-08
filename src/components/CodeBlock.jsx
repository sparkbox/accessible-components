export default function CodeBlock({ name, exportedCodeString }) {
  return (
    <article className="cmp-code-block">
      <h2 className="cmp-code-block__heading">{name}</h2>
      <section className="cmp-code-block__content">
        <pre data-testid="pre-tag-found">
          <code role="code" data-testid="code-tag-found">
            {exportedCodeString}
          </code>
        </pre>
      </section>
    </article>
  );
}

export default function RelatedComponents({ components }) {
  return (
    <div className="rel-component" data-testid="rel-component">
      <h2 className="rel-component__heading">Related Components</h2>
      <div className="rel-component__list">
        {components.map((cmt) => (
          <a
            key={cmt.slug}
            className="rel-component__link"
            href={`/${cmt.slug}`}
          >
            {cmt.name}
          </a>
        ))}
      </div>
    </div>
  );
}

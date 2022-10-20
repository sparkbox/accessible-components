export default function SpecificationBlock({ heading, children }) {
  return (
    <div className="cmp-specification-block">
      <h2 className="cmp-specification-block__heading" data-testid="spec-block-heading">{heading}</h2>
      <div className="cmp-specification-block__content" data-testid="spec-block-content">
        {children}
      </div>
    </div>
  );
}

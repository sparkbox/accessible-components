export default function SpecificationBlock({ heading, children }) {
  return (
    <div className="cmp-specifications-block__wrapper">
      <h2
        className="cmp-specifications-block__heading"
        data-testid="spec-block-heading"
      >
        {heading}
      </h2>
      <div
        className="cmp-specifications-block__content"
        data-testid="spec-block-content"
      >
        {children}
      </div>
    </div>
  );
}

export default function Definition({ children }) {
  return (
    <div className="cmp-definition">
      <div className="cmp-definition__text">
        <h2
          className="cmp-definition__heading"
          data-testid="definition-heading"
        >
          Definition
        </h2>
        <div className="cmp-definition__content">{children}</div>
      </div>
      <div className="cmp-definition__bg-text" />
    </div>
  );
}

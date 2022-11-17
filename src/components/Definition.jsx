export default function Definition({ children }) {
  return (
    <div className="cmp-definition">
      <div className="cmp-definition__container">
        <div className="cmp-definition__content">
          <h2
            className="cmp-definition__heading"
            data-testid="definition-heading"
          >
            Definition
          </h2>
          <div className="cmp-definition__text">{children}</div>
        </div>
      </div>
    </div>
  );
}

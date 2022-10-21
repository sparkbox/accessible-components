export default function Definition({ children }) {
  return (
    <div className="cmp-definition">
      <h2 className="cmp-definition__heading" data-testid="definition-heading">
        Definition
        <img
          src="circle.svg"
          className="cmp-definition__heading-circle"
          alt=""
        />
      </h2>
      <div className="cmp-definition__content">{children}</div>
    </div>
  );
}

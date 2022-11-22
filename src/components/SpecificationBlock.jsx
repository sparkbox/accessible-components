export default function SpecificationBlock({
  heading,
  children,
  rowStart,
  numberOfRows,
  columnStart,
  numberOfColumns,
}) {
  return (
    <div
      className="cmp-specifications-block__wrapper"
      style={{
        '--column-start': columnStart,
        '--number-of-columns': numberOfColumns,
        '--row-start': rowStart,
        '--number-of-rows': numberOfRows,
      }}
    >
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

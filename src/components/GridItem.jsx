export default function GridItem({
  rowStart,
  rowSpan,
  columnStart,
  columnSpan,
  children,
}) {
  return (
    <li
      className="components-grid__item"
      style={{
        '--row-start': rowStart,
        '--row-span': rowSpan,
        '--column-start': columnStart,
        '--column-span': columnSpan,
      }}
    >
      {children}
    </li>
  );
}

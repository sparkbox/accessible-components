export default function RelatedComponents({ components }) {
  if (!components.length) return '';

  return (
    <div className="rel-component" data-testid="rel-component">
      <h2 className="rel-component__heading">
        <img
          className="rel-component__heading--arrow"
          src="/shapes/cmt_inventory_arrow.svg"
          alt=""
        />
        Component Inventory
      </h2>
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

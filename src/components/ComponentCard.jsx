import Link from 'next/link';

export default function ComponentCard({
  name,
  slug,
  defaultImage,
  hoverImage,
}) {
  return (
    <Link href={slug} className="component-link" data-cy="component-card">
      <div className="component-card">
        <span className="component-card__header">{name}</span>
        <img src={defaultImage} alt="" className="component-card__image-open" />
        <img src={hoverImage} alt="" className="component-card__image-closed" />
      </div>
    </Link>
  );
}

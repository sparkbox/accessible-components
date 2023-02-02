import Link from 'next/link';

export default function ComponentCard({
  name, slug, imageOpen, imageClosed,
}) {
  return (
    <Link href={slug} className="component-link" data-cy="component-card">
      <div className="component-card">
        <span className="component-card__header">{name}</span>
        <img src={imageOpen} alt="" className="component-card__image-open" />
        <img
          src={imageClosed}
          alt=""
          className="component-card__image-closed"
        />
      </div>
    </Link>
  );
}

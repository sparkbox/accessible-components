import Link from 'next/link';

export default function ComponentCard({ name, slug, image }) {
  return (
    <Link href={slug}>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
      <div className="component-card" tabIndex={0}>
        <span className="component-card__header">
          {name}
        </span>
        <img
          src={image}
          alt={`example of ${name} element`}
          className="component-card__image"
        />
      </div>
    </Link>
  );
}

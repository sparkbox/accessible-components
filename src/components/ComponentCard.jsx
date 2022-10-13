import Link from 'next/link';

export default function ComponentCard({ name, slug, image }) {
  return (
    <Link href={slug}>
      <a className="component-link">
        <div className="component-card">
          <span className="component-card__header">{name}</span>
          <img src={image} alt="" className="component-card__image" />
        </div>
      </a>
    </Link>
  );
}

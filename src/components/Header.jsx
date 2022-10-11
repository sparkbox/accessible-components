import Link from 'next/link';

export default function Header() {
  return (
    <header className="cmp-header">
      <Link href="/" aria-label="To home page" className="cmp-header__link">
        <a>
          <img
            className="cmp-header__logo"
            src="/sparkbox-logo-text.svg"
            alt="Sparkbox logo"
          />
        </a>
      </Link>
    </header>
  );
}
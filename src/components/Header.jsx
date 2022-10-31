import Link from 'next/link';

export default function Header() {
  return (
    <header className="cmp-header" data-testid="header">
      <Link href="/" aria-label="To home page" className="cmp-header__link">
        <img
          className="cmp-header__logo"
          src="/images/sparkbox-logo-text.svg"
          alt="Sparkbox logo"
        />
      </Link>
    </header>
  );
}

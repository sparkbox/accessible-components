import Link from 'next/link';

export default function Header() {
  return (
    <header className="cmp-header" data-testid="header">
      <Link href="/" aria-label="To home page" className="cmp-header__link">
        Accessible Components
      </Link>
    </header>
  );
}

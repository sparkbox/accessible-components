import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="cmp-header" data-testid="header">
      <Link href="/" aria-label="To home page" className="cmp-header__link">
        <Logo />
      </Link>
    </header>
  );
}

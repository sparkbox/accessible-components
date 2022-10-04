import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div>
      <main>
        <h1>
          Welcome to the Accessibility Capstone!
        </h1>
        <ul>
          <li><Link href="/accordion">Accordion</Link></li>
          <li><Link href="/dialog">Dialog</Link></li>
          <li><Link href="/disclosure">Disclosure</Link></li>
          <li><Link href="/tabs">Tabs</Link></li>
        </ul>
      </main>
    </div>
  );
}

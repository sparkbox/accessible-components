import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div>
      <main className="home">
        <div className="home-top">
          <div>
            <h1>Accessibility Cheatsheets for Components</h1>
            <p className="home-top__top-description">
              Intro copy goes here, such as: Build accessible components 
              more accurately and in less time with these easy-to-read 
              cheatsheets based on WCAG and ARIA best practices. 
              Check back often as we’re adding new components frequently!
            </p>
            <ul>
              <li><Link href="/accordion">Accordion</Link></li>
              <li><Link href="/dialog">Dialog</Link></li>
              <li><Link href="/disclosure">Disclosure</Link></li>
              <li><Link href="/tabs">Tabs</Link></li>
            </ul>
          </div>
        </div>
        <img className="home-top__top-image" src="/home-header-image.svg" alt="Illustration of dog surrounded by accessible components" />
      </main>
    </div>
  );
}

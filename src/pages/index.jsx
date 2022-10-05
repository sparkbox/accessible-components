import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import PageTitle from '../components/PageTitle';

export default function Home() {
  return (
    <div>
      <PageTitle title="Home" />
      <Header />
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
              <li><Link href="/accordion"><a>Accordion</a></Link></li>
              <li><Link href="/dialog"><a>Dialog</a></Link></li>
              <li><Link href="/disclosure"><a>Disclosure</a></Link></li>
              <li><Link href="/tabs"><a>Tabs</a></Link></li>
            </ul>
          </div>
        </div>
        <img className="home-top__top-image" src="/home-header-image.svg" alt="Illustration of dog surrounded by accessible components" />
      </main>
    </div>
  );
}

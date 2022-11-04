import React from 'react';
import Layout from '../components/Layout';
import ComponentCard from '../components/ComponentCard';

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <div className="home">
        <div className="home-wrapper">
          <div className="home-top">
            <div className="home-top__text-column">
              <h1>Accessibility Cheatsheets for Components</h1>
              <p className="home-top__top-description">
                Intro copy goes here, such as: Build accessible components more
                accurately and in less time with these easy-to-read cheatsheets
                based on WCAG and ARIA best practices. Check back often as
                we&#39;re adding new components frequently!
              </p>
            </div>
            <picture>
              <source
                srcSet="/images/home-header-image_dark.svg"
                media="(prefers-color-scheme: dark)"
              />
              <img
                className="home-top__top-image"
                src="/images/home-header-image_light.svg"
                alt="Illustration of dog surrounded by accessible components"
              />
            </picture>
          </div>
        </div>
        <article className="components-grid">
          <h2 className="components-grid__heading">Components</h2>
          <ul className="components-grid__list">
            <li className="components-grid__item components-grid__item--accordion">
              <ComponentCard
                name="Accordion"
                slug="/accordion"
                image="/images/components/accordion.svg"
              />
            </li>
            <li className="components-grid__item components-grid__item--dialog">
              <ComponentCard
                name="Dialog"
                slug="/dialog"
                image="/images/components/dialog.svg"
              />
            </li>
            <li className="components-grid__item components-grid__item--disclosure">
              <ComponentCard
                name="Disclosure"
                slug="/disclosure"
                image="/images/components/disclosure.svg"
              />
            </li>
            <li className="components-grid__item components-grid__item--tabs">
              <ComponentCard
                name="Tabs"
                slug="/tabs"
                image="/images/components/tabs.svg"
              />
            </li>
            <li className="components-grid__item components-grid__item--max-scott">
              <img
                src="/images/max-grid.svg"
                alt="Illustration of cute small white terrier dog with tongue out and head turned left looking like he is curious"
              />
            </li>
          </ul>
          <p className="home__date-updated">
            Updated:
            <time dateTime="2022-12-16"> mm/dd/yyyy</time>
          </p>
        </article>
      </div>
    </Layout>
  );
}

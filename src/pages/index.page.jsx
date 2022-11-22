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
              <p>
                Building accessible components is hard: the requirements are
                complicated, the specifications are dense, and good examples are
                sparse.
              </p>
              <p>
                These cheatsheets should make that a little bit easier—and
                they&#39;re based on WCAG and ARIA best practices. Check back
                often as we&#39;re adding new components frequently!
              </p>
            </div>
            <div>
              <picture>
                <source
                  srcSet="/images/home-header-image_dark.svg"
                  media="(prefers-color-scheme: dark)"
                />
                <img
                  src="/images/home-header-image_light.svg"
                  className="home-top__top-image"
                  alt="Illustration of dog surrounded by accessible components"
                />
              </picture>
            </div>
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
        </article>
      </div>
    </Layout>
  );
}

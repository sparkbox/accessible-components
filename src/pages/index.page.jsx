import React from 'react';
import Layout from '../components/Layout';
import ComponentCard from '../components/ComponentCard';

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <div className="home">
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
          <div>
            <img
              className="home-top__top-image"
              src="/home-header-image_light.svg"
              alt="Illustration of dog surrounded by accessible components"
            />
          </div>
        </div>
        <ul className="components-grid">
          <li className="components-grid__item components-grid__item--accordion">
            <ComponentCard
              name="Accordion"
              slug="/accordion"
              image="/components/accordion_artwork.svg"
            />
          </li>
          <li className="components-grid__item components-grid__item--dialog">
            <ComponentCard
              name="Dialog"
              slug="/dialog"
              image="/components/dialog_artwork.svg"
            />
          </li>
          <li className="components-grid__item components-grid__item--disclosure">
            <ComponentCard
              name="Disclosure"
              slug="/disclosure"
              image="/components/disclosure_artwork.svg"
            />
          </li>
          <li className="components-grid__item components-grid__item--tabs">
            <ComponentCard
              name="Tabs"
              slug="/tabs"
              image="/components/tabs_artwork.svg"
            />
          </li>
          <li className="components-grid__item components-grid__item--max-scott">
            <img
              src="/max-grid.svg"
              alt="Illustration of cute small white terrier dog with tongue out and head turned left looking like he is curious"
            />
          </li>
        </ul>
      </div>
    </Layout>
  );
}

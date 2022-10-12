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
              Intro copy goes here, such as: Build accessible components
              more accurately and in less time with these easy-to-read
              cheatsheets based on WCAG and ARIA best practices.
              Check back often as we’re adding new components frequently!
            </p>
          </div>
        </div>
        <div>
          <img
            className="home-top__top-image"
            src="/home-header-image.svg"
            alt="Illustration of dog surrounded by accessible components"
          />
        </div>
        <div className="components">
          <ul className="component-grid">
            <li className="component-grid__item component-grid__item--accordion">
              <ComponentCard name="Accordion" slug="/accordion" image="/accordion_artwork.svg" />
            </li>
            <li className="component-grid__item component-grid__item--dialog">
              <ComponentCard name="Dialog" slug="/dialog" image="/dialog_artwork.svg" />
            </li>
            <li className="component-grid__item component-grid__item--disclosure">
              <ComponentCard name="Disclosure" slug="/disclosure" image="/disclosure_artwork.svg" />
            </li>
            <li className="component-grid__item component-grid__item--tabs">
              <ComponentCard name="Tabs" slug="/tabs" image="/tabs_artwork.svg" />
            </li>
            <li className="component-grid__item component-grid__item--max-scott">
              Max-scot illustration
              </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

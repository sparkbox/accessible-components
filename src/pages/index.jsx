import React from 'react';
import Layout from '../components/Layout';
import ComponentCard from '../components/ComponentCard';

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <div>
        <div className="home-top">
          <div>
            <h1>Accessibility Cheatsheets for Components</h1>
            <p className="home-top__top-description">
              Intro copy goes here, such as: Build accessible components
              more accurately and in less time with these easy-to-read
              cheatsheets based on WCAG and ARIA best practices.
              Check back often as we’re adding new components frequently!
            </p>
            <img
              className="home-top__top-image"
              src="/home-header-image.svg"
              alt="Illustration of dog surrounded by accessible components"
            />
          </div>
        </div>
        <ul>
          <li>
            <ComponentCard name="Accordion" slug="/accordion" image="/accordion_artwork.svg" />
          </li>
          <li>
            <ComponentCard name="Dialog" slug="/dialog" image="/dialog_artwork.svg" />
          </li>
          <li>
            <ComponentCard name="Disclosure" slug="/disclosure" image="/disclosure_artwork.svg" />
          </li>
          <li>
            <ComponentCard name="Tabs" slug="/tabs" image="/tabs_artwork.svg" />
          </li>
        </ul>
      </div>
    </Layout>
  );
}

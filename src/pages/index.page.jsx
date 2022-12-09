import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import ComponentCard from '../components/ComponentCard';

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <svg xmlns="http://www.w3.org/2000/svg" class="svg-partials">
        <symbol id="doodle_arrow" viewBox="0 0 80 98.1">
          <path
            d="m80 48-2-34c-.3-4.5-1-9.6-4.6-12.2C70.3-.6 66-.2 62 .4L31.8 4.7c-3.2.5-4 5-2.5 7.7 1.6 2.8 4.5 4.5 6.6 6.8 2.1 2.4 3.3 6.3 1.1 8.6A324.2 324.2 0 0 0 1.2 73 5.3 5.3 0 0 0 0 76.2 5.4 5.4 0 0 0 1.5 79l13 16.2c1.2 1.5 2.8 3.2 4.7 2.9 1.3-.3 2.2-1.4 3-2.5l36-46.7c2.5-3.1 7.4-.6 10.4 2 3 2.7 7.8 5.4 10.3 2.3 1.1-1.4 1.1-3.4 1-5.3zM6.6 75.3c-.4-3.6 2-6.8 4.3-9.6l30.4-37.2c1-1.2 2.1-2.6 2-4.3a6.8 6.8 0 0 0-1.5-3.5L33.5 9q15.3-2.7 30.7-4.4l1.2 8.9c-.4 8.2 4.4 18 .4 25.7-.9-6-9.6-8.7-13.7-4.3Q32 56 14.4 78.8C12 81.7 7 79 6.7 75.4z"
            fill="currentColor"
          />
        </symbol>
        <symbol id="doodle_o" viewBox="0 0 139.6 59.8">
          <path
            d="M31.3 8a21 21 0 0 0-6.2-6c-5-3-11.5-2.3-16.3.8A20.8 20.8 0 0 0 .2 17c-1 7.2 1.8 15.5 8.4 18.6 4 2 8.9 1.6 13.1.3 7.3-2.3 14-8.6 14-16.3 0-4.2-2-8.2-4.4-11.6zM9.6 20c-.4-3.1.6-6.6 3.1-8.4 4.8-3.4 12.2 1.6 12 7.4a8.5 8.5 0 0 1-5 7.3 7.4 7.4 0 0 1-8.4-2A8.7 8.7 0 0 1 9.6 20z"
            fill="currentColor"
          />
        </symbol>
        <symbol id="doodle_diamond" viewBox="0 0 50.6 76.8">
          <path
            d="M49.6 39c-1.8 2.5-5 3.6-7.8 5a29 29 0 0 0-15 21.2c-.4 3.4-.4 7-2.5 9.7-2.1 2.7-7.5 2.6-8-.7a105.6 105.6 0 0 0-14.4-38c-1.8-2.8-3.2-7.5 0-8.7a40 40 0 0 0 23-25.2c.7-2.6 4.5-3 6.6-1.3 2 1.7 2.8 4.5 3.2 7.2.8 4.7 1 9.5 2.8 14 1.8 4.4 5.3 8.5 10 9.1 3.2.5 4 5 2.1 7.6z"
            fill="currentColor"
          />
        </symbol>
        <symbol id="doodle_line" viewBox="0 0 131.7 139.7">
          <path
            d="M130.9 9q-5.6 16.2-11 32.5c-1.8 5-3.7 10.2-8 13.1-4.4 3-10.2 2.9-15.5 3.8-5.3.9-11.2 4.1-11.4 9.5-.4 8-11 13.4-17.7 9-5.2 7-2.9 17.8-8 25-6.7 9.5-21.3 7-32.4 3.6-7.2-2.2-13 6.5-14.4 13.9-1.4 7.4-2 16.3-8.5 20-2.9 1.6-4.6-3.6-3.8-6.9L6.7 103c1.8-7.8 12.5-8.9 20.3-7 7.8 1.8 17 4.4 22.9-1 3.8-3.5 4.5-9.1 5-14.2s1.2-10.7 5-14.2S71.4 64 72.2 69c2.3-5.4 4.7-11 8.8-15.3 4-4.4 10.2-7.2 16-5.7 4.1 1 8.5-1.6 11-5.2 2.3-3.6 3.2-8 4.3-12a116.8 116.8 0 0 1 10.1-26c1.5-2.7 4.3-5.9 7.2-4.6 2.9 1.3 2.3 5.6 1.3 8.7z"
            fill="currentColor"
          />
        </symbol>
        <symbol id="doodle_x" viewBox="0 0 49.3 54.8">
          <path
            d="M40 30.4c-1 1-1.1 3 .2 3.7 6.7 3.6 7.4 14.7 1.2 19C35.2 57.4 25 53 24 45.4c-.1-1.5-2.2-2-3.5-1.3-1.3.7-2.2 2-3.3 3-4.2 3.6-11 1-14.4-3.3a11.6 11.6 0 0 1-2.7-9c.5-3.2 3.3-6 6.5-6 3 .1 3.5-4.6 1.7-7-1.8-2.4-5-3.7-6.1-6.5-2-4.7 2.2-9.5 6-12.8A11.3 11.3 0 0 1 11.6.3c4.5-1.6 8.8 3 10.7 7.5.6 1.5 1.2 3.2 2.5 4.3 1.3 1.1 3.6 1.3 4.5 0 3.8-5.6 13-6.3 17.5-1.3s3 14-3 17.2c-1.2.7-2.7 1.2-3.7 2.3z"
            fill="currentColor"
          />
        </symbol>
      </svg>
      <div className="home">
        <div className="home-wrapper">
          <Header />
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
          <h2 className="components-grid__heading">
            Components
            <svg
              class="doodle doodle-line-pseudo-heading"
              viewBox="0 0 131.7 139.7"
            >
              <use href="#doodle_line" />
            </svg>
          </h2>
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
              <svg class="doodle doodle-o-pseudo" viewBox="0 0 139.6 59.8">
                <use href="#doodle_o" />
              </svg>
            </li>
            <li className="components-grid__item components-grid__item--disclosure">
              <ComponentCard
                name="Disclosure"
                slug="/disclosure"
                image="/images/components/disclosure.svg"
              />
              <svg
                class="doodle doodle-diamond-pseudo-grid"
                viewBox="0 0 50.6 76.8"
              >
                <use href="#doodle_diamond" />
              </svg>
            </li>
            <li className="components-grid__item components-grid__item--tabs">
              <ComponentCard
                name="Tabs"
                slug="/tabs"
                image="/images/components/tabs.svg"
              />
              <svg class="doodle doodle-x__pseudo" viewBox="0 0 49.3 54.8">
                <use href="#doodle_x" />
              </svg>
            </li>
            <li className="components-grid__item components-grid__item--max-scott">
              <div className="max-wrapper">
                <svg class="doodle doodle-arrow__pseudo" viewBox="0 0 80 98.1">
                  <use href="#doodle_arrow" />
                </svg>
                <svg
                  class="doodle doodle-diamond__pseudo--max"
                  viewBox="0 0 50.6 76.8"
                >
                  <use href="#doodle_diamond" />
                </svg>
                <svg
                  class="doodle doodle-line-pseudo-max"
                  viewBox="0 0 131.7 139.7"
                >
                  <use href="#doodle_line" />
                </svg>
                <img
                  src="/images/max-grid.svg"
                  alt="Illustration of cute small white terrier dog with tongue out and head turned left looking like he is curious"
                />
              </div>
            </li>
          </ul>
        </article>
      </div>
    </Layout>
  );
}

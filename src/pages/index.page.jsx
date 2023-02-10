import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import ComponentCard from '../components/ComponentCard';
import { getHomePageInfo, fields } from '../utils/airtable';
import GridItem from '../components/GridItem';

export default function Home({ details }) {
  return (
    <Layout pageTitle="Home">
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
          <h2 className="components-grid__heading">Components</h2>
          <ul className="components-grid__list">
            {details.map((item) => (
              <GridItem
                key={item[fields.COMPONENT_NAME]}
                rowStart={item[fields.ROW_START]}
                rowSpan={item[fields.ROW_SPAN]}
                columnStart={item[fields.COLUMN_START]}
                columnSpan={item[fields.COLUMN_SPAN]}
              >
                <ComponentCard
                  name={item['Component Name']}
                  slug={`/${item.Slug}`}
                  imageOpen={`/images/components/${item.Slug}_open.svg`}
                  imageClosed={`/images/components/${item.Slug}_closed.svg`}
                />
              </GridItem>
            ))}
            <li className="components-grid__item components-grid__item--max-scott">
              <div className="max-wrapper">
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

// pre-render this page on each request using data in props.
export async function getStaticProps() {
  try {
    // run the airtable function to get the data and save to the details variable.
    const details = await getHomePageInfo();

    // pass that details variable and its data into props to use elsewhere
    return {
      props: {
        details,
      },
    };
  } catch {
    return { notFound: true };
  }
}

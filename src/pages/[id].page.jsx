import { useState, useEffect } from 'react';
import { Sandpack } from '@codesandbox/sandpack-react';
import { levelUp } from '@codesandbox/sandpack-themes';
import Layout from '../components/Layout';
import { getAllComponents, getComponentDetails } from '../utils/airtable';
import RelatedComponents from '../components/RelatedComponents';
import SpecificationBlock from '../components/SpecificationBlock';
import Definition from '../components/Definition';
import DetailsBanner from '../components/DetailsBanner';
import UsageGuidelines from '../components/UsageGuidelines';
import RichText from '../components/RichText';
import masonryDetails from '../utils/masonryDetails';

export default function Details({ details }) {
  const {
    componentName,
    slug,
    definition,
    specificationBlocks,
    relatedComponents,
    usageGuidelines,
  } = details;

  const image = {
    src: `/images/components/${slug}.svg`,
    alt: `${componentName} image`,
  };

  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [javascriptCode, setJavascriptCode] = useState('');
  const [canRenderSandpack, setCanRenderSandpack] = useState(false);

  // dynamic imports need to be asynchronous
  useEffect(() => {
    const updateSandpackExamples = async () => {
      try {
        const html = await import(`../code-examples/${slug}/html.js`);
        setHtmlCode(html.default);

        const css = await import(`../code-examples/${slug}/css.js`);
        setCssCode(css.default);

        const javascript = await import(
          `../code-examples/${slug}/javascript.js`
        );
        setJavascriptCode(javascript.default);
        setCanRenderSandpack(true);
      } catch (e) {
        // we want a console.log when there might not be any code
        // examples, so I disabled this lint rule
        // eslint-disable-next-line no-console
        console.log(`We couldn't find code examples for ${slug}.`);
      }
    };
    updateSandpackExamples();
  });

  return (
    <Layout pageTitle={componentName}>
      <div className="details-page__header">
        <DetailsBanner name={componentName} image={image} />
      </div>
      <Definition>
        <RichText markdown={definition} />
      </Definition>
      {canRenderSandpack ? (
        <div className="details-page__primary details-page__primary--sandpack">
          <article className="sandpack">
            <header>
              <h2>Code Example</h2>
            </header>
            <figure>
              <Sandpack
                template="vanilla"
                theme={levelUp}
                files={{
                  '/index.html': {
                    code: htmlCode,
                    active: true,
                  },
                  [`/${slug}.css`]: cssCode,
                  [`/${slug}.js`]: javascriptCode,
                  '/index.js': {
                    code: `import "./${slug}.css"; import "./${slug}.js";`,
                    hidden: true,
                  },
                }}
                options={{
                  showLineNumbers: true,
                  wrapContent: true,
                  editorHeight: 480,
                  recompileMode: 'immediate',
                }}
              />
            </figure>
            <figcaption>
              Once focused on the code editor:
              <p>
                Press <kbd>Enter</kbd> to enter the code editor and change the
                code.
              </p>
              <p>
                Press <kbd>Escape</kbd> to leave the code editor.
              </p>
            </figcaption>
          </article>
        </div>
      ) : null}
      <div className="details-page__banner">
        <div className="details-page__secondary details-page__secondary--usage-guidelines">
          <UsageGuidelines>
            <RichText markdown={usageGuidelines} />
          </UsageGuidelines>
        </div>
      </div>
      <div className="details-page__primary">
        <div className="cmp-specifications-block">
          {specificationBlocks.map((block) => (
            <SpecificationBlock
              key={block.id}
              heading={block.heading}
              rowStart={masonryDetails[slug][block.heading]?.rowStart ?? 'auto'}
              numberOfRows={
                masonryDetails[slug][block.heading]?.numberOfRows ?? 1
              }
              columnStart={
                masonryDetails[slug][block.heading]?.columnStart ?? 'auto'
              }
              numberOfColumns={
                masonryDetails[slug][block.heading]?.numberOfColumns ?? 1
              }
            >
              <RichText markdown={block.content} />
            </SpecificationBlock>
          ))}
        </div>
      </div>
      {/* List of links to other components. Only renders when it contains content. */}
      {relatedComponents.length ? (
        <div className="details-page__banner">
          <div className="details-page__secondary details-page__secondary--related-components">
            <RelatedComponents components={relatedComponents} />
          </div>
        </div>
      ) : (
        ''
      )}
    </Layout>
  );
}

// Returns related components with name and slug
const getRelatedComponents = (details) => {
  if (!details['Component Name (from Related Components)']) return [];
  const relatedComponents = [];
  const names = details['Component Name (from Related Components)'];
  const slugs = details['Slug (from Related Components)'];
  // The linter is auto formatting this for loop on commit
  for (
    let i = 0;
    i < details['Component Name (from Related Components)'].length;
    i += 1
  ) {
    relatedComponents.push({ name: names[i], slug: slugs[i] });
  }
  return relatedComponents;
};

export async function getStaticPaths() {
  const components = await getAllComponents();

  return {
    paths: components.map((component) => ({
      params: {
        id: component.Slug,
      },
    })),
    fallback: false,
  };
}

// pre-render this page on each request using data in props.
export async function getStaticProps({ params }) {
  try {
    const { id } = params;
    // run the airtable function to get the data and save to the details variable.
    const details = await getComponentDetails(id);
    // pass that details variable and its data into props to use elsewhere
    return {
      props: {
        // Creates a details object with our component properties and passes it in for props
        details: {
          componentName: details['Component Name'],
          slug: details.Slug,
          definition: details.Definition,
          specificationBlocks: [
            {
              id: 1,
              heading: 'Focus Expectations',
              content: details['Focus Expectations'],
            },
            {
              id: 2,
              heading: 'Semantic Elements',
              content: details['Semantic Elements'],
            },
            {
              id: 3,
              heading: 'ARIA Roles and Attributes',
              content: details['ARIA Roles and Attributes'],
            },
            {
              id: 4,
              heading: 'Keyboard Interactions',
              content: details['Keyboard Interactions'],
            },
            {
              id: 5,
              heading: 'Additional Resources',
              content: details['Additional Resources'],
            },
          ],
          relatedComponents: getRelatedComponents(details),
          usageGuidelines: details['Usage Guidelines'],
        },
      },
    };
  } catch {
    return { notFound: true };
  }
}

import Layout from '../components/Layout';
import getComponentDetails from '../utils/airtable';
import RelatedComponents from '../components/RelatedComponents';
import SpecificationBlock from '../components/SpecificationBlock';
import Definition from '../components/Definition';
import DetailsBanner from '../components/DetailsBanner';
import UsageGuidelines from '../components/UsageGuidelines';
import RichText from '../components/RichText';

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
    src: `/${slug}_artwork.svg`,
    alt: `${componentName} image`,
  };

  return (
    <Layout pageTitle={componentName}>
      <div className="details-page">
        <DetailsBanner name={componentName} image={image} />
        <Definition>
          <p>{definition}</p>
        </Definition>
        <UsageGuidelines>
          <RichText markdown={usageGuidelines} />
        </UsageGuidelines>
        <div className="cmp-specifications-block">
          {specificationBlocks.map((block) => (
            <SpecificationBlock key={block.id} heading={block.heading}>
              <RichText markdown={block.content} />
            </SpecificationBlock>
          ))}
        </div>
        {/* List of links to other components */}
        <RelatedComponents components={relatedComponents} />
      </div>
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
  return {
    paths: [
      {
        params: { id: 'accordion' },
      },
      {
        params: { id: 'dialog' },
      },
      {
        params: { id: 'disclosure' },
      },
      {
        params: { id: 'tabs' },
      },
    ],
    fallback: 'blocking', // indicates the type of fallback
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
              heading: 'Keyboard Interactions',
              content: details['Keyboard Interactions'],
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
              heading: 'Focus Expectations',
              content: details['Focus Expectations'],
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

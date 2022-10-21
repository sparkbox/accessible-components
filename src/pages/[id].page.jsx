import Layout from '../components/Layout';
import getComponentDetails from '../utils/airtable';
import RelatedComponents from '../components/RelatedComponents';
import SpecificationBlock from '../components/SpecificationBlock';
import Definition from '../components/Definition';
import DetailsBanner from '../components/DetailsBanner';
import RichText from '../components/RichText';

// Data will be replaced by Airtable
const relatedComponents = [
  {
    name: 'Accordion',
    slug: 'accordion',
  },
  {
    name: 'Alert',
    slug: 'alert',
  },
  {
    name: 'Checkbox',
    slug: 'checkbox',
  },
  {
    name: 'Dialog',
    slug: 'dialog',
  },
  {
    name: 'Disclosure',
    slug: 'disclosure',
  },
  {
    name: 'Tabs',
    slug: 'tabs',
  },
];

export default function Details({ componentName }) {
  const image = {
    src: '/details-banner.svg',
    alt: `${componentName} image`,
  };

  return (
    <Layout pageTitle={componentName}>
      <div className="details-page">
        <DetailsBanner name={componentName} image={image} />
        <Definition>
          {/* This content will be replaced with Air Table data */}
          <p>
            An Accordion is a group of interactive headings with corresponding
            sections of content that are stacked vertically. Typically, these
            are used to reduce the amount of vertical space that the content
            occupies, which limits the amount of scrolling needed to bypass that
            content.
          </p>
          <p>
            Each group in an Accordion is composed of two parts: an Accordion
            Header and an Accordion Panel. The Accordion Header describes the
            content of its associated Accordion Panel, as well as controls
            showing and hiding that content. The Accordion Panel contains
            content that relates to the Accordion Header.
          </p>
          <p>
            A common use-case for Accordions would be a Frequently Asked
            Questions (FAQ) section, where each question is an Accordion header,
            and the answer to that question is in the Accordion panel.
          </p>
        </Definition>
        <div className="cmp-specifications-block">
          {/* This content will be replaced with Air Table data */}
          <SpecificationBlock heading="Focus Expectations">
            <RichText
              markdown="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              doloremque minima ducimus et voluptatem natus repudiandae porro
              vel, animi fugiat."
            />
          </SpecificationBlock>
          <SpecificationBlock heading="Keyboard Interactions">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              doloremque minima ducimus et voluptatem natus repudiandae porro
              vel, animi fugiat.
            </p>
          </SpecificationBlock>
          <SpecificationBlock heading="Semantic Elements">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              doloremque minima ducimus et voluptatem natus repudiandae porro
              vel, animi fugiat.
            </p>
          </SpecificationBlock>
          <SpecificationBlock heading="ARIA Roles and Attributes">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              doloremque minima ducimus et voluptatem natus repudiandae porro
              vel, animi fugiat.
            </p>
          </SpecificationBlock>
        </div>
        {/* List of links to other components */}
        <RelatedComponents components={relatedComponents} />
      </div>
    </Layout>
  );
}

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
        componentName: details['Component Name'],
      },
    };
  } catch {
    return { notFound: true };
  }
}

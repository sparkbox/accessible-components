import Layout from '../components/Layout';
import getComponentDetails from '../utils/airtable';
import SpecificationBlock from '../components/SpecificationBlock';
import Definition from '../components/Definition';
import DetailsBanner from '../components/DetailsBanner';

export default function Details({ componentName }) {
  const image = {
    src: '/details-banner.svg',
    alt: `${componentName} image`,
  };

  return (
    <Layout pageTitle={componentName}>
      <div className="details-page">
        <h1>{componentName}</h1>
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
        <DetailsBanner name={componentName} image={image} />
        <div className="cmp-specifications-list">
          {/* This content will be replaced with Air Table data */}
          <SpecificationBlock heading="Focus Expectations">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              doloremque minima ducimus et voluptatem natus repudiandae porro
              vel, animi fugiat.
            </p>
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

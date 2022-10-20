import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import SpecificationBlock from '../components/SpecificationBlock';

export default function Details() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout pageTitle={id}>
      <div>
        <h1>{ id }</h1>
        <div className="cmp-specifications-list">
          {/* This content will be replaced with Air Table data */}
          <SpecificationBlock heading="Focus Expectations">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod doloremque
              minima ducimus et voluptatem natus repudiandae porro vel, animi fugiat.
            </p>
          </SpecificationBlock>
          <SpecificationBlock heading="Keyboard Interactions">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod doloremque
              minima ducimus et voluptatem natus repudiandae porro vel, animi fugiat.
            </p>
          </SpecificationBlock>
          <SpecificationBlock heading="Semantic Elements">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod doloremque
              minima ducimus et voluptatem natus repudiandae porro vel, animi fugiat.
            </p>
          </SpecificationBlock>
          <SpecificationBlock heading="ARIA Roles and Attributes">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod doloremque
              minima ducimus et voluptatem natus repudiandae porro vel, animi fugiat.
            </p>
          </SpecificationBlock>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths = async () => ({
  paths: [
    '/accordion',
    '/dialog',
    '/disclosure',
    '/tabs',
  ],
  fallback: 'blocking', // indicates the type of fallback
});

// pre-render this page on each request using data in props.
export const getStaticProps = async () => ({
  props: {},
});

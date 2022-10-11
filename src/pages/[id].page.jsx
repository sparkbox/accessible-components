import { useRouter } from 'next/router';
import Layout from '../components/Layout';

export default function Details() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout pageTitle={id}>
      <div>
        <h1>{ id }</h1>
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

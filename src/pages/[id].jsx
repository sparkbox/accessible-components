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

// pre-render this page on each request using data in props.
export async function getServerSideProps() {
  return {
    props: {},
  };
}

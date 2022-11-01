import Link from 'next/link';
import Layout from '../components/Layout';

export default function ErrorPage() {
  return (
    <Layout pageTitle="404">
      <h1>404 Not Found</h1>
      <Link href="/">Overview Page</Link>
    </Layout>
  );
}

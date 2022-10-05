import Link from 'next/link';
import Header from '../components/Header';
import PageTitle from '../components/PageTitle';

export default function ErrorPage() {
  return (
    <div>
      <PageTitle title="404 Not Found" />
      <Header />
      <h1>404 Not Found</h1>
      <Link href="/"><a>Overview Page</a></Link>
    </div>
  );
}

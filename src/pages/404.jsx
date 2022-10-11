import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link href="/"><a>Overview Page</a></Link>
    </div>
  );
}

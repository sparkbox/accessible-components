import Link from 'next/link';
import Layout from '../components/Layout';

export default function ErrorPage() {
  return (
    <Layout pageTitle="404">
      <h1>404 Not Found</h1>
      <Link href="/"><a>Overview Page</a></Link>
    </Layout>
  );
}

// THE CODE BELOW WAS INCLUDED IN THE ORIGINAL 404.JSX FILE. IT MAY HAVE BEEN OVERWRITTEN ON
// ACCIDENT SO I'M KEEPING IT HERE JUST IN CASE WE NEED IT AGAIN.
// export default function ErrorPage() {
//   return (
//     <div>
//       {/* <PageTitle title="404 Not Found" /> */}
//       {/* <Header /> */}
//       <h1>404 Not Found</h1>
//       <Link href="/"><a>Overview Page</a></Link>
//     </div>
//   );
// }

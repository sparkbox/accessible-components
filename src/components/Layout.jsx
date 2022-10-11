import Head from 'next/head';
import Header from './Header';

function formatTitle(title) {
  const firstLetter = title[0];
  const titleWithoutFirstLetter = title.substring(1);
  return firstLetter.toUpperCase() + titleWithoutFirstLetter.toLowerCase();
}

export default function Layout({ children, pageTitle }) {
  // Title has to be concatenated into a string before being set
  const formattedTitle = `${formatTitle(pageTitle)} | Accessible Components`;
  return (
    <>
      <Header />
      <Head>
        <title>{formattedTitle}</title>
        <meta name="description" content="Sparkbox accessible components" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}

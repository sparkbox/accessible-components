import Head from 'next/head';
import Footer from './Footer';

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
      <Head>
        <title data-testid="layout-title">{formattedTitle}</title>
        <meta name="description" content="Sparkbox accessible components" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <div className="page-container">
        <main className="content">{children}</main>
        <Footer />
      </div>
    </>
  );
}

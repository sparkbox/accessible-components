import Head from 'next/head';

export default function PageTitle({ title }) {
  // Title has to be concatenated into a string before being set
  const titleName = `${title} | Accessible Components`;

  return (
    <Head>
      <title>{ titleName }</title>
      <meta name="description" content="Sparkbox accessible components" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
}

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default MyApp;

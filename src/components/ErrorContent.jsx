export default function ErrorContent() {
  return (
    <section className="error-page__wrapper">
      <section className="error-page__content">
        <h1 className="error-page__heading">404 Not Found</h1>
        <p className="error-page__message">
          We couldn&#39;t find the page you were looking for.
        </p>
        <p className="error-page__message">Enjoy Max instead!</p>
      </section>
      <section className="error-page__image">
        <img
          src="/images/max-grid.svg"
          alt="Illustration of cute small white terrier dog with tongue out and head turned left looking like he is curious"
        />
      </section>
    </section>
  );
}

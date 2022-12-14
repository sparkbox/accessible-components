import Layout from '../components/Layout';
import Header from '../components/Header';
import ErrorContent from '../components/ErrorContent';

export default function ErrorPage() {
  return (
    <Layout pageTitle="404">
      <div className="error-page">
        <section className="error-page__header">
          <Header />
        </section>
        <ErrorContent />
      </div>
    </Layout>
  );
}

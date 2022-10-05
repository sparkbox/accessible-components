import { useRouter } from 'next/router';
import Header from '../components/Header';

export default function Details() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Header />
      <h1>{ id }</h1>
    </div>
  );
}

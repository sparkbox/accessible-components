import Head from 'next/head';
import Link from 'next/link';

export default function ErrorPage() {
    return (
			<div>
				<Head>
					<title><a>404 Not Found</a></title>
				</Head>
				<h1>404 Not Found</h1>
				<Link href='/'><a>Overview Page</a></Link>
			</div>
		);
}

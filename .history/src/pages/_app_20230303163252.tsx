import Footer from '@/layout/Footer';
import NavBar from '@/layout/NavBar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className='relative'>
			<NavBar />
			<Component {...pageProps} />
			<Footer />
		</main>
	);
}

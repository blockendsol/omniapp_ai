import ContractProvider from '@/context/cotract/reducer';
import Footer from '@/layout/Footer';
import NavBar from '@/layout/NavBar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
	<ContractProvider>
			<main className='relative'>
			<NavBar />
			<Component {...pageProps} />
			<Footer />
		</main>
	</ContractProvider>
	);
}

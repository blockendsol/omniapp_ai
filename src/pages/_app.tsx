import Footer from '@/layout/Footer';
import NavBar from '@/layout/NavBar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
// import { Inter } from 'next/font/google';

// const inter = Inter({
// 	weight: ['100', '200', '300', '400', '500', '600', '800', '900'],
// 	subsets: ['latin'],
// });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className='relative hero-gradient'>
			<div className='absolute left-[941px] top-[-86px] right-[5.24%] h-[491px] w-full bg-[url("/section_svg/earth-globe.svg")] bg-no-repeat' />
			<NavBar />
			<Component {...pageProps} />
			<Footer />
		</main>
	);
}

import Footer from '@/layout/Footer';
import NavBar from '@/layout/NavBar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className='relative'>
			{/* <div className='absolute left-[941px] top-[-86px] right-[5.24%] h-[491px] w-full bg-[url("/section_svg/earth-globe.svg")] bg-no-repeat' /> */}
			{/* <div className='absolute w-full bg-[url("/section_svg/landslide.png")] bg-no-repeat' /> */}
			<NavBar />
			<Component {...pageProps} />
			<Footer />
		</main>
	);
}

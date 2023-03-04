import ContractProvider from '@/context/cotract/reducer';
import Footer from '@/layout/Footer';
import NavBar from '@/layout/NavBar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
	return (
	<ContractProvider>
	<ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
		<main className='relative'>
			<NavBar />
			<Component {...pageProps} />
			<Footer />
		</main>
	</ContractProvider>
	);
}

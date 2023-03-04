/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import NavLink from '@/components/shared/NavLink';
import Logo from './Logo';
import Icon from '@/components/shared/Icon';
import { confirmWalletConnection, connectWallet, disConnect } from '@/context/cotract/methods';
import { useEffect, useState } from 'react';
import { shortner } from 'utility/shortner';
import ConnectWalletButton from './ConnectWalletButton';
import { useContractHook } from '@/context/cotract/reducer';

const ActiveLink = ({ href, title }: { href: string; title: string }) => {
	const router = useRouter();

	const path = router.asPath === href ? 'text-main' : 'text-white hover:text-main';

	return (
		<NavLink href={href} className={`${path} text-[16px] font-ruberoid font-semibold leading-[23px]`}>
			{title}
		</NavLink>
	);
};

export default function NavBar() {
	const { events } = useRouter();
	const [showMobileNav, setShowNobileNav] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const { account, setAccount } = useContractHook();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	function openMobileMav() {
		setShowNobileNav(true);
	}

	function closeMobileMav() {
		setShowNobileNav(false);
	}

	function openModal() {
		setIsOpen(!isOpen);
	}

	function closeModal() {
		setIsOpen(false);
	}

	// set mobile nav to close on any route change
	useEffect(() => {
		// subscribe to next/router event
		events.on('routeChangeStart', closeMobileMav);
		return () => {
			// unsubscribe to event on unmount to prevent memory leak
			events.off('routeChangeStart', closeMobileMav);
		};
	}, [closeMobileMav, events]);

	useEffect(() => {
		confirmWalletConnection(setAccount);
	}, [account]);

	return (
		<nav className='sticky top-0 z-50 w-full  bg-primary backdrop-blur-[52px] backdrop-filter'>
			<div className='w-full h-[100px] py-[33px] px-[15px] md:py-[18px]  md:px-16'>
				<div className='flex items-center justify-between'>
					<Logo />

					<div className='hidden md:flex justify-start items-center flex-col gap-[246px] md:flex-row'>
						<ul className='md:flex flex-col gap-10 md:flex-row'>
							<li>
								<ActiveLink href='/' title='About Us' />
							</li>
							<li>
								<ActiveLink href='/products' title='Products' />
							</li>
							<li>
								<ActiveLink href='/whitepapper' title='Whitepaper' />
							</li>
							<li>
								<ActiveLink href='/dashboard' title='Dashboard' />
							</li>
						</ul>
						{account ? (
							<button
								className='flex flex-row items-center py-4 px-[46px] gap-[10px] border border-main rounded-lg'
								onClick={openModal}
							>
								<span className='text-white text-[16px] font-ruberoid font-semibold leading-[23px]'>
									{shortner(account)}
								</span>
							</button>
						) : (
							<button
								className='flex flex-row items-center py-4 px-[46px] gap-[10px] bg-main rounded-lg'
								onClick={openModal}
							>
								<span className='text-text-dark text-[16px] font-ruberoid font-semibold leading-[23px]'>
									Connect Wallet
								</span>
							</button>
						)}
					</div>

					<button className='text-white pr-[15px] lg:hidden' onClick={openMobileMav}>
						<Icon icon='ri-menu-5-fill' className='text-3xl text-white' />
					</button>
				</div>
			</div>

			{showMobileNav ? (
				<div className='fixed inset-0 z-50 bg-primary bg-opacity-50 backdrop-blur-[20px] backdrop-filter '>
					<div className='relative bg-section  w-full h-[466px]  flex flex-col pb-8 gap-6'>
						<div className='flex items-end justify-end py-[33px] px-[15px]'>
							<button className='text-white text-4xl hover:text-main' onClick={closeMobileMav}>
								<Icon icon='ri-close-fill' />
							</button>
						</div>
						<ul className='flex flex-col justify-center items-center gap-6'>
							<li>
								<ActiveLink href='/' title='About Us' />
							</li>
							<li>
								<ActiveLink href='/products' title='Products' />
							</li>
							<li>
								<ActiveLink href='/whitepapper' title='Whitepaper' />
							</li>
							<li>
								<ActiveLink href='/dashboard' title='Dashboard' />
							</li>
						</ul>
						<div className='flex justify-center items-center'>
							{account ? (
								<button
									className='flex flex-row items-center py-4 px-[46px] gap-[10px] border border-main rounded-lg'
									onClick={openModal}
								>
									<span className='text-white text-[16px] font-ruberoid font-semibold leading-[23px]'>
										{shortner(account)}
									</span>
								</button>
							) : (
								<button
									className='flex flex-row items-center py-4 px-[46px] gap-[10px] bg-main rounded-lg'
									onClick={openModal}
								>
									<span className='text-text-dark text-[16px] font-ruberoid font-semibold leading-[23px]'>
										Connect Wallet
									</span>
								</button>
							)}
						</div>
					</div>
				</div>
			) : null}

			<Disconnect account={account} isOpen={isOpen && account.length > 0} />
			<ConnectWalletButton
				isOpen={isOpen && !account}
				closeModal={closeModal}
				setConneted={() => connectWallet(setAccount)}
			/>
		</nav>
	);
}

const Disconnect = ({ account, isOpen }: { account: string; isOpen: boolean }) => {
	return (
		<div
			className={`absolute right-14 py-1 justify-center mt-3 w-[200px] bg-main rounded-lg items-center ${
				isOpen ? 'flex' : 'hidden'
			} flex-col`}
		>
			<button className='py-1 cursor-pointer justify-center w-full flex items-center'>
				<span className='hover:font-bold mr-1 font-semibold'>{shortner(account)}</span>
				<i className='ri-file-copy-line'></i>
			</button>
			<button className='py-1 cursor-pointer w-full flex justify-center items-center'>
				{' '}
				<span className='hover:font-bold mr-1 font-semibold'>Disconnect</span>
				<i className='ri-logout-circle-r-line'></i>
			</button>
		</div>
	);
};

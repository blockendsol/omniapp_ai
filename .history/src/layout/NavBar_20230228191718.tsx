import { useRouter } from 'next/router';
import NavLink from '@/components/shared/NavLink';
import Logo from './Logo';
import Icon from '@/components/shared/Icon';
import { confirmWalletConnection } from '@/context/cotract/methods';
import { useEffect, useState } from 'react';

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
	const [account, setAccount] = useState<string>("");
	useEffect(() => {
	  confirmWalletConnection(setAccount);
	}, [account]);
	return (
		<nav className='sticky top-0 z-50 w-full h-[100px] py-[33px] px-[15px] bg-primary backdrop-blur-[52px] backdrop-filter md:py-[18px]  md:px-16'>
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
					<button className='flex flex-row items-center py-4 px-[46px] gap-[10px] bg-main rounded-lg' onClick={()=> {connectWallet(setAccount)}}>
						<span className='text-text-dark text-[16px] font-ruberoid font-semibold leading-[23px]'>
							Connect Wallet
						</span>
					</button>
				</div>

				<button className='text-white pr-[15px] md:hidden' >
					<Icon icon='ri-menu-5-fill' className='w-10 h-10' />
				</button>
			</div>
		</nav>
	);
}

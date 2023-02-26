import { useRouter } from 'next/router';
import NavLink from '@/components/shared/NavLink';
import Logo from './Logo';

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
	return (
		<nav className='sticky w-full h-[100px] py-[18px] px-16 bg-primary backdrop-blur-[52px] backdrop-filter'>
			<div className='flex items-center justify-between'>
				<Logo />
				<ul className='flex gap-10'>
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
				<button className='flex flex-row items-center py-4 px-[46px] gap-[10px] bg-main rounded-lg'>
					<span className='text-text-dark text-[16px] font-ruberoid font-semibold leading-[23px]'>Connect Wallet</span>
				</button>
			</div>
		</nav>
	);
}

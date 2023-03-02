import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/logo/logo.svg';

export default function Logo() {
	return (
		<Link href={'/'}>
			<Image src={logo} alt='logo' className='w-[154px] h-[44px]' />
		</Link>
	);
}

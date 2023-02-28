import Image from 'next/image';
import logo from '/public/logo/logo-dark.svg';
import NavLink from '@/components/shared/NavLink';
import { Copyright } from 'iconsax-react';
import Icon from '@/components/shared/Icon';

export default function Footer() {
	return (
		<div className='relative w-full h-[628px] md:h-[487px]'>
			<div className='absolute bg-[url("/section_svg/footer.svg")] bg-center bg-no-repeat w-full h-[628px] md:h-full' />

			<div className='relative w-full px-[21px] md:px-[100px] py-[100px] md:pb-0 md:pt-[80px]'>
				<div className='w-full flex flex-col items-start md:items-center justify-between md:flex-row'>
					<div className='w-full flex flex-col items-start justify-start md:max-w-[462px] pb-10 md:pb-0'>
						<Image src={logo} alt='logo' className='w-[150px] h-[42px] md:w-[204px] md:h-[50px]' />

						<p className='mt-8 text-[#B7B3B3] text-[18px] font-inter font-light leading-[27px]'>
							Omniaiapp is a DAO powered protocol with a mission of creating a fully decentralized suite of AI and
							Machine learning products.
						</p>
					</div>
					<ul className='grid grid-cols-2 gap-10 md:grid-cols-4'>
						<li>
							<NavLink
								href='/'
								className='text-white text-[16px] font-ruberoid font-semibold leading-[23px] hover:text-main'
							>
								About Us
							</NavLink>
						</li>
						<li>
							<NavLink
								href='/'
								className='text-white text-[16px] font-ruberoid font-semibold leading-[23px] hover:text-main'
							>
								Products
							</NavLink>
						</li>
						<li>
							<NavLink
								href='/'
								className='text-white text-[16px] font-ruberoid font-semibold leading-[23px] hover:text-main'
							>
								Team
							</NavLink>
						</li>
						<li>
							<NavLink
								href='/'
								className='text-white text-[16px] font-ruberoid font-semibold leading-[23px] hover:text-main'
							>
								Whitepaper
							</NavLink>
						</li>
					</ul>
				</div>

				<div className='border-b border-[#2D2D2D] py-10' />

				<div className='w-full flex flex-col items-start md:items-center justify-between md:flex-row py-[60px]'>
					<p className='flex items-center text-grey text-[12px] font-inter font-medium leading-[16px] mb-10 md:mb-0'>
						<Copyright className='w-5 h-5 mr-2' /> 2023 Omniapp | All Rights Reserved
					</p>

					<div className='flex flex-row gap-6 p-0'>
						<NavLink href='' target='_blank' rel='_norel' className='text-grey hover:text-main'>
							<Icon icon='ri-twitter-line' className='w-5 h-5' />
						</NavLink>
						<NavLink href='' target='_blank' rel='_norel' className='text-grey hover:text-main'>
							<Icon icon='ri-reddit-line' className='w-5 h-5' />
						</NavLink>
						<NavLink href='' target='_blank' rel='_norel' className='text-grey hover:text-main'>
							<Icon icon='ri-telegram-line' className='w-5 h-5' />
						</NavLink>
						<NavLink href='' target='_blank' rel='_norel' className='text-grey hover:text-main'>
							<Icon icon='ri-medium-line' className='w-5 h-5' />
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
}

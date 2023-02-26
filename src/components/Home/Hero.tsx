import Icon from '../shared/Icon';
import SaleCard from './SaleCard';

export default function Hero() {
	return (
		<section className='relative w-full'>
			<div className=' absolute bg-[url("/section_svg/earth-globe.svg")]' />

			<div className='w-full flex flex-col gap-[52px] px-16 py-[78px] md:flex-row'>
				<div className='w-full max-w-[680px]'>
					<h1 className='text-white text-[58px] leading-[72px] font-ruberoid  font-extrabold mb-4'>
						Pioneering The Future of AI & <span className='text-main'>Blockchain Technology</span>
					</h1>

					<p className='text-white text-[32px] leading-[47px] font-ruberoid font-medium'>
						To Build The Next Generation Of Decentralized AI Products.
					</p>

					<div className='w-full flex items-center space-x-[35px] mt-[56px]'>
						<button className='bg-plain flex flex-row items-center py-4 px-6 text-white gap-[10px] rounded-lg hover:text-main'>
							<Icon icon='ri-telegram-line' className='text-xl' />{' '}
							<span className=' text-[16px] font-ruberoid font-semibold leading-[23px]'>Join Our Telegram</span>
						</button>

						<button className='flex flex-row items-center py-4 px-6 text-white gap-[10px] rounded-lg border border-[transparent] hover:border-main hover:text-main'>
							<Icon icon='ri-file-copy-2-line' className='text-xl' />{' '}
							<span className=' text-[16px] font-ruberoid font-semibold leading-[23px]'>Read Whitepaper</span>
						</button>
					</div>
				</div>
				<div className='relative w-[585px]'>
					<SaleCard />
				</div>
			</div>
		</section>
	);
}

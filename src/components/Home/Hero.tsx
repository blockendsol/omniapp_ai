import Icon from '../shared/Icon';
import SaleCard from './SaleCard';

export default function Hero() {
	return (
		<section className='relative w-full'>
			<div className='absolute top-[-100px] md:top-[-276px] bottom-0 bg-[url("/section_svg/mobile_hero.png")] md:bg-[url("/section_svg/landslide.svg")] bg-cover md:bg-auto bg-no-repeat w-full h-full md:h-[1590px]' />

			<div className='relative w-full flex flex-col items-center gap-[52px] px-5 md:px-16 py-[78px] md:items-start md:flex-row'>
				<div className='w-full md:max-w-[680px] text-center md:text-left'>
					<h1 className='text-white text-[30px] leading-[33px] md:text-[58px] md:leading-[72px] font-ruberoid  font-extrabold mb-4'>
						Pioneering The Future of AI & <span className='text-main'>Blockchain Technology</span>
					</h1>

					<p className='text-white text-[18px] leading-[26px] font-ruberoid font-medium md:text-[32px] md:leading-[47px]'>
						To Build The Next Generation Of Decentralized AI Products.
					</p>

					<div className='w-full flex flex-col items-center gap-[35px] mt-[56px] md:flex-row'>
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
				<div className='w-full h-full md:w-[585px]'>
					<SaleCard />
				</div>
			</div>
		</section>
	);
}

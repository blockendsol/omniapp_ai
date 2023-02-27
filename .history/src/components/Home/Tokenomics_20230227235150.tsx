import Image from 'next/image';
import stackCoin from '/public/card/coin-stack.svg';

const DetailsCard = ({ title, value }: { title: string; value: string }) => {
	return (
		<div className='w-full flex flex-col items-start py-[32px] px-[40px] gap-[10px] bg-[#02121D] rounded-xl'>
			<span className='text-grey text-[12px] leading-[18px] font-inter font-light uppercase'>{title}</span>
			<span className='text-[20px] leading-[20px] text-white font-ruberoid font-extrabold'>{value}</span>
		</div>
	);
};

const Distribution = ({ color, title, value }: { color: string; title: string; value: string }) => {
	return (
		<div className='w-full flex flex-col items-start gap-1'>
			<span className='text-grey text-[12px] leading-[18px] font-inter font-light uppercase'>{title}</span>
			<span className={`${color} text-[44px] leading-[44px] font-inter font-semibold`}>{value}</span>
		</div>
	);
};

export default function Tokenomics() {
	return (
		<section className='relative w-full bg-section'>
			<div className='absolute bg-[url("/section_svg/section-team.svg")] bg-no-repeat w-full' />

			<div className='w-full  px-[156px]'>
				<h1 className='text-glow text-[80px] leading-[80px] font-ruberoid font-extrabold mb-[56px]'>Tokenomics</h1>

				<div className='w-full flex items-start flex-row gap-[48px] max-w-[768px] mb-[100px]'>
					<div className='w-full flex flex-col items-start gap-4'>
						<DetailsCard title='Token Name' value='OmniAI App Token' />
						<DetailsCard title='Ticker' value='OMP' />
					</div>
					<div className='w-full flex flex-col items-start gap-4'>
						<DetailsCard title='total supply' value='100,000' />
						<DetailsCard title='chain' value='Binance Smart Chain' />
					</div>
				</div>

				<div className='w-full flex items-start flex-col gap-[81px] md:flex-row'>
					<Image src={stackCoin} alt='coin stack' className='w-[393px] h-[452px]' />

					<div className='w-full'>
						<h3 className='text-white text-[40px] leading-[40px] font-ruberoid font-extrabold'>Token Distribution</h3>

						<div className='grid grid-cols-4 gap-[56px] mt-[64px]'>
							<Distribution color='text-main' title='Team' value='20%' />
							<Distribution color='text-info' title='liquidity' value='15%' />
							<Distribution color='text-main' title='Angel investors' value='5%' />
							<Distribution color='text-info' title='Marketing' value='10%' />
							<Distribution color='text-main' title='seed round' value='10%' />
							<Distribution color='text-info' title='treasury' value='10%' />
							<Distribution color='text-main' title='pre-sale' value='30%' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

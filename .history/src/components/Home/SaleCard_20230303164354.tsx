import Image from 'next/image';
import coin from '/public/card/pebles-card.svg';
import chart from '/public/card/chart.png';
import coin_icon from '/public/card/bnb.svg';
import { useState } from 'react';
import { BuyNow } from '@/context/cotract/methods';
import { useContractHook } from '@/context/cotract/reducer';

const SaleStats = ({ title, value }: { title: string; value: string }) => {
	return (
		<div className='w-full flex flex-col justify-center items-start gap-1'>
			<span className='text-white text-[10px] leading-[15px] font-ruberoid font-normal uppercase'>{title}</span>
			<span className='text-white text-[15px] leading-[21px] font-inter font-bold'>{value}</span>
		</div>
	);
};

export default function SaleCard() {
	const [bnb, setBNB] = useState<number | null >(null);
	const [token, setToken] = useState<number | null>(null);
	const {account} = useContractHook();

	// Conversion calculation
	const setTokenPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(e.target.value);
		setBNB(Number(value * 0.0004).toFixed(4) as any);
		setToken(value);
	};

	// Conversion calculation
	const setBNBPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(e.target.value);
		setBNB(value);
		setToken(2500 * value);
	};

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		BuyNow((token as number).toString(), (bnb as number).toString());
	};

	return (
		<div className='w-full h-full bg-primary backdrop-blur-[50px] py-[34px] px-[28px] rounded-xl my:py-[62px] md:px-[40px]'>
			<div className='w-full flex items-start gap-6 flex-row'>
				<Image src={coin} alt='omp' className='w-[56px] h-[47px]' />
				<div className='w-full'>
					<h4 className='text-white text-[17px] leading-[21px] font-ruberoid font-extrabold md:text-[25px] md:leading-[27px]'>
						Get up to 50% Bonous by Joining Our Seed Round
					</h4>
					<button className='flex flex-row items-center py-2 px-4 gap-[10px] border-2 border-main rounded-lg text-white text-[11px] leading-[13px] font-inter font-semibold mt-4'>
						35D : 1H : 47M : 52S
					</button>
				</div>
			</div>

			<div className='w-full items-center gap-6 flex flex-col mt-[33px] md:flex-row'>
				<Image src={chart} alt='omp' className='w-[161px] h-[161px]' />

				<div className='w-[266px] h-[84px] box-border p-[1px] rounded-xl box-grad'>
					<div className='w-full h-full bg-primary backdrop-blur-[800px] flex flex-row items-center py-[22px] px-[10px] gap-4 rounded-xl md:items-start'>
						<SaleStats title='Total Sold' value='81,458 OMP' />
						<SaleStats title='Total Raised' value='40.190 BNB' />
					</div>
				</div>
			</div>

			<form onSubmit={handleSubmit}>
				<div className='flex flex-col my-6 gap-4'>
					<div className='relative'>
						<label className='absolute pl-[33px] pt-[10px] pb-[5px] text-[#565656] text-[12px] leading-[18px] uppercase font-ruberoid font-normal'>
							You pay
						</label>
						<input
							value={bnb && bnb > 0 ? bnb : ''}
							onChange={setBNBPrice}
							type='number'
							placeholder='0.00'
							className='block w-full rounded-xl border border-grey bg-[#02121D] py-[20px] pl-[33px] pr-[40px] font-inter font-semibold text-[28px] leading-[34px] text-white focus:outline-none focus:border-main'
						/>

						<div className='absolute right-0 inset-y-[10px] pb-[20px] pr-[40px] text-white '>
							<div className='flex flex-row items-center py-4 px-6 gap-[10px] border-2 border-main rounded-lg'>
								<Image src={coin_icon} alt='bnb' className='w-4 h-4' />
								<span className=' text-[12px] leading-[18px] font-ruberoid font-semibold'>BNB</span>
							</div>
						</div>
					</div>
					<span className='text-[#9C9C9C] text-[12px] leading-[15px] font-inter font-normal'>
						Minimum Buy: 1 BNB - 25, 000 OMP
					</span>
					<div className='relative'>
						<label className='absolute pl-[33px] pt-[10px] pb-[5px] text-[#565656] text-[12px] leading-[18px] uppercase font-ruberoid font-normal'>
							You Receive
						</label>
						<input
							onChange={setTokenPrice}
							value={token && token > 0 ? token : ''}
							type='number'
							placeholder='0.00'
							className='block w-full rounded-xl border overflow-hidden border-grey bg-[#02121D] py-[20px] pl-[33px] pr-[40px] font-inter font-semibold text-[28px] leading-[34px] text-white placeholder:text-[#565656] focus:outline-none focus:border-main'
						/>
					</div>
				</div>

				<button className='w-full flex flex-row items-center justify-center py-4 px-[46px] gap-[10px] bg-main rounded-lg'>
					<span className='text-text-dark text-[16px] font-ruberoid font-semibold leading-[23px]'>Buy Now</span>
				</button>
			</form>

			<div className=' text-center text-[16px] leading-[23px] text-white font-ruberoid gap-4 mt-10'>
				<p className=' font-normal'>Seed Round Ends 31st march</p>
				<p className='font-extrabold'>
					Presale on Pinksale starts 2nd April. Listing on Pancakeswap Immediately After Presale
				</p>
			</div>
		</div>
	);
}

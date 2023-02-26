import Image from 'next/image';
import coin from '/public/card/pebles-card.svg';
import chart from '/public/card/chart.png';

const SaleStats = ({ title, value }: { title: string; value: string }) => {
	return (
		<div className='w-full flex flex-col justify-center items-start gap-1'>
			<span className='text-white text-[10px] leading-[15px] font-ruberoid font-normal uppercase'>{title}</span>
			<span className='text-white text-[15px] leading-[21px] font-inter font-bold'>{value}</span>
		</div>
	);
};

export default function SaleCard() {
	return (
		<div className='w-full h-[890px] bg-primary backdrop-blur-[50px] py-[62px] px-[40px] rounded-xl'>
			<div className='w-full flex flex-row items-start gap-6 '>
				<Image src={coin} alt='omp' className='w-[56px] h-[47px]' />
				<div className='w-full'>
					<h4 className='text-white font-ruberoid font-extrabold text-[25px] leading-[27px]'>
						Get up to 50% Bonous by Joining Our Seed Round
					</h4>
					<button className='flex flex-row items-center py-2 px-4 gap-[10px] border-2 border-main rounded-lg text-white text-[11px] leading-[13px] font-inter font-semibold mt-4'>
						35D : 1H : 47M : 52S
					</button>
				</div>
			</div>

			<div className='w-full items-center gap-6 flex mt-[33px]'>
				<Image src={chart} alt='omp' className='w-[161px] h-[161px]' />

				<div className='w-[266px] h-[84px] box-border p-[1px] rounded-xl box-grad'>
					<div className='w-full h-full bg-primary backdrop-blur-[800px] flex flex-row items-start py-[22px] px-[10px] gap-4 rounded-xl'>
						<SaleStats title='Total Sold' value='81,458 OMP' />
						<SaleStats title='Total Raised' value='40.190 BNB' />
					</div>
				</div>
			</div>
		</div>
	);
}

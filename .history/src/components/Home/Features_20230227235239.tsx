import Image from 'next/image';
import image_1 from '/public/card/sperial_big_1.png';
import image_2 from '/public/card/sperial_big_2.png';
import image_3 from '/public/card/sperial_small_3.png';
import image_4 from '/public/card/sperial_small_2.png';

export default function Features() {
	return (
		<section className=' w-full h-full pt-[150px] px-[156px] bg-section'>
			<div className='w-full flex items-center gap-10'>
				<div className='w-[40%]' />

				<div className='max-w-[597px]'>
					<h3 className='text-white text-[80px] leading-[80px] font-ruberoid font-extrabold mb-6'>
						Our Products & <span className='text-glow'>Features</span>
					</h3>

					<p className='text-grey text-[21px] leading-[32px] font-inter font-light mb-10'>
						We are building an ecosystem of products that will form the backbone of our platform and in turn give
						utility to our OMP Token.
					</p>

					<p className='text-white text-[29px] leading-[35px] font-inter font-normal'>
						Here’s a brief showcase of the products we are developing.
					</p>
				</div>
			</div>

			<div className='w-full grid grid-cols-2 gap-4 py-[100px]'>
				<div className='relative w-[500px] h-[393px] py-[114px] pl-[50px] rounded-xl card-1'>
					<Image
						src={image_1}
						alt='card'
						className='absolute w-[215px] h-[200px]  left-[285px] bottom-0 rounded-br-xl'
					/>

					<div className='relative max-w-[296px] flex flex-col items-start gap-4'>
						<h4 className='text-white text-[40px] leading-[44px] font-ruberoid font-extrabold'>OmniAI Bot</h4>

						<p className='text-white text-[14px] leading-[21px] font-inter font-normal'>
							An Open AI powered telegram & discord bot that will function in a way similar to chatGPT and will be free
							for all users to access with premium features available to only OMP token holders.
						</p>
					</div>
				</div>

				<div className='relative w-[500px] h-[393px] py-[81px] pl-[172px] rounded-xl card-2'>
					<Image src={image_3} alt='card' className='absolute w-[215px] h-[200px]  left-0 bottom-0 rounded-bl-xl' />

					<div className='relative max-w-[296px] flex flex-col items-start gap-4'>
						<h4 className='text-white text-[40px] leading-[44px] font-ruberoid font-extrabold'>OmniAI App</h4>

						<p className='text-white text-[14px] leading-[21px] font-inter font-normal'>
							Our proprietary AI powered super app that would have AI Conversational ability (ChatGPT), Stable Diffusion
							and Dalle-3 all bundled into an app. OmniAI App will have multiple features like Answering your day to day
							questions, becoming your life coach and even your fitness planner.
						</p>
					</div>
				</div>

				<div className='relative w-[500px] h-[393px] py-[81px] pl-[50px] rounded-xl card-3'>
					<Image src={image_2} alt='card' className='absolute w-[215px] h-[200px]  left-[285px] top-0 rounded-tr-xl' />

					<div className='relative max-w-[296px] flex flex-col items-start gap-4'>
						<h4 className='text-white text-[40px] leading-[44px] font-ruberoid font-extrabold'>OmniAI Predict</h4>

						<p className='text-white text-[14px] leading-[21px] font-inter font-normal'>
							With this predict feature, users can utilize our AI technology to predict future events and even the stock
							and crypto markets using Artificial intelligence.
						</p>
					</div>
				</div>

				<div className='relative w-[500px] h-[393px] py-[81px] pl-[172px] rounded-xl card-4'>
					<Image src={image_4} alt='card' className='absolute w-[215px] h-[200px]  left-0 top-0 rounded-tl-xl' />
					<div className='relative max-w-[296px] flex flex-col items-start gap-4'>
						<h4 className='text-white text-[40px] leading-[44px] font-ruberoid font-extrabold'>OmniAI DAO</h4>

						<p className='text-white text-[14px] leading-[21px] font-inter font-normal'>
							Holders of the OMP Token can participate in governance by locking up or staking their tokens and using the
							Proof of stake to create proposals or vote on proposals that will introduce new features or upgrades to
							our ecosystem.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

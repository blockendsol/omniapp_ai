export default function About() {
	return (
		<section className='w-full h-full py-[163px] px-16 bg-black bg-opacity-50 backdrop-blur-[50px] backdrop-filter'>
			<div className='flex justify-start gap-[35px]'>
				<h1 className='max-w-[651px] text-white text-[80px] leading-[80px] font-ruberoid font-extrabold'>
					A New Era For <span className='text-glow'>Blockchain</span>
				</h1>

				<div className='text-white text-[21px] leading-[32px] font-inter font-normal max-w-[447px]'>
					<p className='pb-8'>
						Omniaiapp is a DAO powered protocol with a mission of creating a fully decentralized suite of AI and Machine
						learning products that would help users streamline their day to day tasks to increase productivity and
						output. Our goal is to create products that will not be dependent on any central entity and will be open and
						accessible to all.
					</p>
					<p>
						Our Core team includes cryptocurrency and blockchain experts, AI and Machine learning developers with years
						of experience in the crypto and AI industry.
					</p>
				</div>
			</div>
			<div className='absolute bg-[url("/section_svg/sperial.svg")] bg-no-repeat w-[843px] h-[824px] left-[-124px] top-[462px]' />
		</section>
	);
}

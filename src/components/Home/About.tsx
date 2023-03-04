export default function About() {
	return (
		<section className='w-full h-full  bg-black bg-opacity-50 backdrop-blur-[50px] backdrop-filter '>
			<div className='absolute bg-[url("/section_svg/mobile_about.png")] md:bg-[url("/section_svg/about-section.png")] bg-cover bg-no-repeat w-full h-full' />
			<div className='relative w-full h-full py-[100px] px-[19px] md:py-[163px] md:px-16'>
				<div className='flex flex-col justify-start gap-[35px] md:flex-row'>
					<h1 className='max-w-[651px] text-white text-[36px] leading-[36px] font-ruberoid font-extrabold md:text-[80px] md:leading-[80px]'>
						A New Era For <span className='text-glow'>Blockchain</span>
					</h1>

					<div className='text-white text-[21px] leading-[32px] font-inter font-normal max-w-[447px]'>
						<p className='pb-8'>
							Omniaiapp is a DAO powered protocol with a mission of creating a fully decentralized suite of AI and
							Machine learning products that would help users streamline their day to day tasks to increase productivity
							and output. Our goal is to create products that will not be dependent on any central entity and will be
							open and accessible to all.
						</p>
						<p>
							Our Core team includes cryptocurrency and blockchain experts, AI and Machine learning developers with
							years of experience in the crypto and AI industry.
						</p>
					</div>
				</div>
			</div>

			<div className='hidden md:block absolute bg-[url("/section_svg/sperial.svg")] bg-no-repeat w-[361px] h-[353px] left-[7px] md:left-[-124px] top-[500px] md:top-[462px] md:w-[843px] md:h-[824px]' />
		</section>
	);
}

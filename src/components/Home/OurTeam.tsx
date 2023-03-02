import Image, { StaticImageData } from 'next/image';

import team_1 from '/public/team/team_1.png';
import team_2 from '/public/team/team_2.png';
import team_3 from '/public/team/team_3.png';
import team_4 from '/public/team/team_4.png';
import NavLink from '../shared/NavLink';
import Icon from '../shared/Icon';

type TeamCardProps = {
	image: StaticImageData;
	name: string;
	role: string;
	link: string;
};

const TeamCard = ({ image, name, role, link }: TeamCardProps) => {
	return (
		<div className='w-full flex flex-col items-center md:items-start p-0'>
			<Image src={image} alt='name' className='w-[226px] h-[226px] mb-10' />

			<h4 className='text-white text-[28px] leading-[31px] font-inter font-extrabold pb-2'>{name}</h4>
			<p className='text-white text-[14px] leading-[21px] font-inter font-normal mb-[11px]'>{role}</p>

			<NavLink href={link} target='_blank' className='text-white hover:text-main'>
				<Icon icon='ri-linkedin-box-line' className='w-10 h-10' />
			</NavLink>
		</div>
	);
};

export default function OurTeam() {
	return (
		<section className='relative w-full h-full bg-section'>
			<div className='absolute bg-[url("/section_svg/section-team.svg")] bg-no-repeat w-full h-full' />
			<div className='relative w-full h-full pt-[120px] pb-[100px] px-[18px] md:px-16'>
				<div className='flex flex-col items-start gap-6 max-w-[601px]'>
					<h2 className='text-white text-[36px] leading-[36px] font-ruberoid font-extrabold md:text-[80px] md:leading-[80px]'>
						Our Core Team
					</h2>
					<p className='text-grey text-[21px] leading-[37px] font-inter font-light'>
						Our team has deep experience building and scaling blockchains from projects.
					</p>
				</div>

				<div className='flex flex-col md:flex-row items-center md:items-start gap-[56px] mt-[72px]'>
					<TeamCard image={team_1} name='Damir Hajdic' role='Co-Founder, Omniapp' link='/' />
					<TeamCard image={team_2} name='Damir Hajdic' role='Co-Founder, Omniapp' link='/' />
					<TeamCard image={team_3} name='Damir Hajdic' role='Co-Founder, Omniapp' link='/' />
					<TeamCard image={team_4} name='Damir Hajdic' role='Co-Founder, Omniapp' link='/' />
					{/* <div className='w-full flex flex-col items-start p-0'>
						<Image src={team_1} alt='name' className='w-[226px] h-[226px] mb-10' />

						<h4 className='text-white text-[28px] leading-[31px] font-inter font-extrabold pb-2'>Damir Hajdic</h4>
						<p className='text-white text-[14px] leading-[21px] font-inter font-normal mb-[11px]'>
							Co-Founder, Omniapp
						</p>

						<NavLink href='/' target='_blank' className='text-white hover:text-main'>
							<Icon icon='ri-linkedin-box-line' className='w-[20px] h-[20px]' />
						</NavLink>
					</div> */}
				</div>
			</div>
		</section>
	);
}

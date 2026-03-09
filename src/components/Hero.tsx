import Image from 'next/image';
import { FaLocationArrow, FaCalendarAlt } from 'react-icons/fa';

import MagicButton from './ui/magic-button';
import { Spotlight } from './ui/Spotlight';
import { TextGenerate } from './ui/text-generate';
import { Vortex } from './ui/vortex';

import LogoDark from '../../public/logo-horz-trans.svg';
import LogoLight from '../../public/hoz-trans-dark.png';

const SPOTLIGHTS = [
	{
		className: '-top-40 -left-10 md:-left-32 md:-top-20 h-screen',
		fill: '#9300F3',
	},
	{
		className: 'left-80 top-28 h-[80vh] w-[50vw]',
		fill: '#A5E1FF',
	},
	{
		className: 'h-[80vh] w-[50vw] top-10 left-full',
		fill: '#62D0FF',
	},
];

const Hero = () => {
	return (
		<Vortex
			backgroundColor='transparent'
			rangeY={800}
			particleCount={500}
			className='flex h-screen w-full flex-col items-center justify-center'>
			<div className='py-20'>
				{SPOTLIGHTS.map((props, i) => (
					<Spotlight
						key={i}
						{...props}
					/>
				))}

				<section className='flex justify-center py-10 md:py-14 lg:py-20 xl:py-24'>
					<div className='flex flex-col items-center justify-center text-center md:max-w-2xl lg:max-w-[60vw]'>
						<h2 className='text-xs tracking-widest text-muted-foreground uppercase'>
							Application Development for Startups &amp; Growing Companies
						</h2>

						<TextGenerate
							className='mt-6 heading-xl text-foreground md:mt-8'
							words={'Built Right,\nFrom Day One.'}
						/>

						<p className='mt-6 mb-10 flex max-w-full flex-wrap items-center justify-center gap-2 text-lg font-medium tracking-wide md:mt-8 md:text-xl lg:text-2xl'>
							{"We're"}
							<Image
								src={LogoDark}
								alt='303Devs - Colorado-based web, mobile, and software development studio'
								className='hidden h-[2.25em] w-auto pb-[0.4em] dark:inline-block'
								priority
								role='img'
							/>
							<Image
								src={LogoLight}
								alt='303Devs - Colorado-based web, mobile, and software development studio'
								className='mt-2 inline-block h-[6.5em] w-auto dark:hidden'
								priority
								role='img'
							/>
							{'— a Colorado-based studio building web, mobile, and software that holds up.'}
						</p>

						<div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
							<a
								href='#projects'
								aria-label='View our recent projects'>
								<MagicButton
									title='View Our Work'
									icon={<FaLocationArrow />}
									position='right'
								/>
							</a>
							<a
								href='https://calendly.com/anthony-303devs/30min'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Book a free discovery call'
								className='flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-border'>
								<FaCalendarAlt />
								Book a Free Call
							</a>
						</div>
					</div>
				</section>
			</div>
		</Vortex>
	);
};

export default Hero;

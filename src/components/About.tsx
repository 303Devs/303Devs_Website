import Image from 'next/image';

const highlights = [
	{ label: 'Based in', value: 'Boulder, CO' },
	{ label: 'Background', value: '15 Years in General Management' },
	{ label: 'Bootcamp', value: 'Hack Reactor' },
	{ label: 'Currently', value: 'University of Colorado Boulder — Statistics & Data Science' },
];

const About = () => {
	return (
		<section
			id='about'
			className='scroll-mt-20 py-16 md:py-24'>
			<div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20'>
				{/* Photo */}
				<div className='flex justify-center lg:justify-end'>
					<div className='relative h-80 w-80 overflow-hidden rounded-3xl border border-border shadow-xl sm:h-96 sm:w-96'>
						<Image
							src='/anthony_headshot.jpg'
							alt='Anthony Merino — Founder of 303Devs'
							fill
							className='object-cover object-top'
							sizes='(max-width: 640px) 320px, 384px'
							priority
						/>
					</div>
				</div>

				{/* Content */}
				<div className='flex flex-col gap-6'>
					<div>
						<p className='text-xs font-semibold tracking-widest text-purple-main uppercase'>
							The Person Behind the Code
						</p>
						<h2 className='mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl'>
							Anthony Merino
						</h2>
						<p className='mt-1 text-base text-muted-foreground'>
							Founder & Lead Developer, 303Devs
						</p>
					</div>

					<div className='flex flex-col gap-4 text-base leading-relaxed text-foreground/80'>
						<p>
							My first career was in operations and general management.
							Fifteen years of it — running teams, managing complex systems,
							solving problems under pressure, and keeping clients happy when
							things went sideways. But the obsession with technology that
							started with my family&apos;s first computer in 1989 never went
							away.
						</p>
						<p>
							I built computers from components before I could write a line of
							code. Programming always felt just out of reach — too many
							languages, no clear starting point. In 2020, when the world
							stopped, I made the bet. I enrolled in Hack Reactor, one of the
							most intensive full-stack bootcamps available, and came out the
							other side a software engineer.
						</p>
						<p>
							That background is not a footnote — it&apos;s the foundation. I
							understand business problems because I&apos;ve managed them at
							scale. I know what it means to ship under pressure, communicate
							clearly with stakeholders, and be accountable for outcomes. Now
							at the University of Colorado Boulder studying Statistics and
							Data Science with a focus on machine and deep learning — because
							the intersection of AI and real-world applications is exactly
							where software is heading.
						</p>
					</div>

					{/* Highlights */}
					<div className='mt-2 grid grid-cols-2 gap-3'>
						{highlights.map(({ label, value }) => (
							<div
								key={label}
								className='rounded-xl border border-border bg-[linear-gradient(145deg,#f4f4f7,#e3e3ee)] p-4 dark:bg-[linear-gradient(145deg,#0C081D,#1A1F2E)]'>
								<p className='text-xs font-semibold tracking-wider text-muted-foreground uppercase'>
									{label}
								</p>
								<p className='mt-1 text-sm font-medium text-foreground'>
									{value}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;

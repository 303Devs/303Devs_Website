'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

const highlights = [
	{ label: 'Based in', value: 'Boulder, CO' },
	{ label: 'Background', value: '15 Years in General Management' },
	{ label: 'Bootcamp', value: 'Hack Reactor' },
	{
		label: 'Currently',
		value: 'CU Boulder — Statistics & Data Science',
	},
];

const About = () => {
	return (
		<section
			id='about'
			className='scroll-mt-20 py-8 md:py-14'>
			<div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20'>
				{/* Photo */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='flex justify-center lg:justify-end'>
					<div className='relative h-80 w-80 overflow-hidden rounded-3xl border border-border shadow-xl sm:h-96 sm:w-96'>
						<Image
							src='/anthony_headshot.jpg'
							alt='Anthony Merino — Founder of 303Devs'
							fill
							className='object-cover object-top'
							sizes='(max-width: 640px) 320px, 384px'
							priority
						/>
						{/* Purple gradient overlay at bottom */}
						<div className='absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-purple-main/20 to-transparent' />
					</div>
				</motion.div>

				{/* Content */}
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className='flex flex-col gap-6'>
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
							My first career was in operations and general management —
							fifteen years of running teams, solving problems under pressure,
							and keeping clients happy when things went sideways. The obsession
							with technology that started with my family&apos;s first computer
							in 1989 never went away.
						</p>
						<p>
							In 2020, I enrolled in Hack Reactor, one of the most intensive
							full-stack bootcamps available, and completed the transition to
							software engineer.
						</p>
						<p>
							That background is the foundation, not a footnote. I understand
							business problems because I&apos;ve managed them at scale — and I
							know what it means to ship under pressure and be accountable for
							outcomes. Currently deepening expertise in Statistics and Data
							Science at CU Boulder, with a focus on machine learning, because
							AI and real-world software are converging fast.
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
				</motion.div>
			</div>
		</section>
	);
};

export default About;

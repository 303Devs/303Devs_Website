'use client';

import { motion } from 'motion/react';
import { FaLocationArrow, FaCalendarAlt } from 'react-icons/fa';

import MagicButton from './ui/magic-button';
import { Spotlight } from './ui/Spotlight';

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
		<section className='relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden'>
			{SPOTLIGHTS.map((props, i) => (
				<Spotlight
					key={i}
					{...props}
				/>
			))}

			{/* Subtle grid texture */}
			<div className='pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(147,0,243,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(147,0,243,0.04)_1px,transparent_1px)] bg-[size:64px_64px]' />

			<div className='relative z-10 flex flex-col items-center justify-center px-4 py-12 text-center'>
				{/* Badge */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-semibold tracking-widest text-muted-foreground uppercase backdrop-blur-sm'>
					<span className='h-1.5 w-1.5 rounded-full bg-purple-main' />
					Independent Developer · Boulder, CO
				</motion.div>

				{/* Headline */}
				<motion.h1
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className='heading-xl max-w-3xl text-foreground'>
					Built Right,
					<br />
					From Day One.
				</motion.h1>

				{/* Subhead */}
				<motion.p
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className='mt-6 max-w-xl text-lg text-muted-foreground md:text-xl'>
					Software built to last — by one developer in Colorado who stays
					accountable.
				</motion.p>

				{/* CTAs */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className='mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
					<a
						href='#projects'
						aria-label='View my recent projects'>
						<MagicButton
							title='View My Work'
							icon={<FaLocationArrow />}
							position='right'
						/>
					</a>
					<a
						href='https://calendly.com/anthony-303devs/30min'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Book a free discovery call'
						className='flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-purple-main/40 hover:bg-border'>
						<FaCalendarAlt />
						Book a Free Call
					</a>
				</motion.div>

				</div>
		</section>
	);
};

export default Hero;

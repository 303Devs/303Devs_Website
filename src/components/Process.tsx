'use client';

import { motion } from 'motion/react';

const steps = [
	{
		number: '01',
		title: 'Discovery',
		description:
			'I start with a conversation — not a contract. What problem are you solving, and what does success actually look like?',
	},
	{
		number: '02',
		title: 'Define',
		description:
			'Scope, priorities, and constraints get locked in before anything moves forward. No ambiguity at this stage means no surprises later.',
	},
	{
		number: '03',
		title: 'Design',
		description:
			'Mockups, user flows, and architecture diagrams — you see exactly what you are getting before a line of production code is written.',
	},
	{
		number: '04',
		title: 'Build',
		description:
			'Iterative development with regular demos. Your feedback shapes the build in real time — no disappearing for weeks.',
	},
	{
		number: '05',
		title: 'Refine',
		description:
			'Edge cases, polish, performance. This is where the gap between "it works" and "it is ready" gets closed.',
	},
	{
		number: '06',
		title: 'Launch & Support',
		description:
			'I handle deployment, monitor for issues, and stay available for bug fixes and small improvements in the weeks after launch.',
	},
];

const Process = () => {
	return (
		<section
			id='process'
			className='scroll-mt-20 py-8 md:py-14'>
			<motion.div
				initial={{ opacity: 0, y: 12 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className='text-center'>
				<p className='text-xs font-semibold tracking-widest text-purple-main uppercase'>
					How I Work
				</p>
				<h2 className='mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl'>
					A Process Built Around Clarity
				</h2>
				<p className='mx-auto mt-4 max-w-2xl text-base text-muted-foreground'>
					Most projects fail because of miscommunication, not bad code. Every
					step here is designed to keep you informed, in control, and confident
					in what is being built.
				</p>
			</motion.div>

			<div className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
				{steps.map((step, i) => (
					<motion.div
						key={step.number}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: i * 0.07 }}
						className='group relative flex flex-col gap-3 rounded-2xl border border-border bg-[linear-gradient(145deg,#f4f4f7,#e3e3ee)] p-8 transition-all duration-300 hover:border-purple-main/30 dark:bg-[linear-gradient(145deg,#0C081D,#1A1F2E)]'>
						<span className='text-4xl font-black tracking-tight text-purple-main opacity-30'>
							{step.number}
						</span>
						<h3 className='text-base font-semibold text-foreground'>
							{step.title}
						</h3>
						<p className='text-sm leading-relaxed text-muted-foreground'>
							{step.description}
						</p>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Process;

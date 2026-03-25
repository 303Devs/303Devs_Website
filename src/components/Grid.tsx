'use client';

import { motion } from 'motion/react';
import {
	FaCode,
	FaMobile,
	FaBolt,
	FaServer,
} from 'react-icons/fa';

const services = [
	{
		icon: FaCode,
		title: 'Full-Stack Web',
		description:
			'React, Next.js, Node.js, TypeScript — clean, maintainable code architected to scale from day one.',
	},
	{
		icon: FaMobile,
		title: 'Mobile Development',
		description:
			'Cross-platform React Native apps for iOS and Android. One codebase, native feel.',
	},
	{
		icon: FaBolt,
		title: 'AI Integration',
		description:
			'LLM-powered features, custom agents, and data pipelines that add real product value — not just demos.',
	},
	{
		icon: FaServer,
		title: 'SaaS Architecture',
		description:
			'Subscription systems, multi-tenancy, and infrastructure designed to grow with your business.',
	},
];

const Grid = () => {
	return (
		<section
			id='services'
			className='scroll-mt-20 py-8 md:py-14'>
			<div className='text-center'>
				<p className='text-xs font-semibold tracking-widest text-purple-main uppercase'>
					What I Build
				</p>
				<h2 className='mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl'>
					Full-spectrum development
				</h2>
				<p className='mx-auto mt-4 max-w-2xl text-base text-muted-foreground'>
					From the first line of code to production infrastructure — one person,
					full accountability, no agency overhead.
				</p>
			</div>

			<div className='mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2'>
				{services.map(({ icon: Icon, title, description }, i) => (
					<motion.div
						key={title}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: i * 0.06 }}
						className='group relative flex flex-col gap-4 rounded-2xl border border-border bg-[linear-gradient(145deg,#f4f4f7,#e3e3ee)] p-8 transition-all duration-300 hover:border-purple-main/40 hover:shadow-lg dark:bg-[linear-gradient(145deg,#0C081D,#1A1F2E)] dark:hover:shadow-none'>
						{/* Icon */}
						<div className='inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-purple-main transition-colors group-hover:border-purple-main/40 group-hover:bg-purple-main/5'>
							<Icon size={17} />
						</div>

						<h3 className='text-base font-semibold text-foreground'>{title}</h3>
						<p className='text-sm leading-relaxed text-muted-foreground'>
							{description}
						</p>

						{/* Hover accent */}
						<span className='absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 rounded-b-2xl bg-purple-main transition-transform duration-300 group-hover:scale-x-100' />
					</motion.div>
				))}
			</div>

			{/* CTA row */}
			<motion.div
				initial={{ opacity: 0, y: 12 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className='mt-10 flex justify-center'>
				<a
					href='#contact'
					className='inline-flex items-center gap-2 text-sm font-medium text-purple-main transition-opacity hover:opacity-70'>
					Ready to build something?
					<svg
						width='14'
						height='14'
						viewBox='0 0 14 14'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						aria-hidden='true'>
						<path
							d='M1 7h12M7 1l6 6-6 6'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</a>
			</motion.div>
		</section>
	);
};

export default Grid;

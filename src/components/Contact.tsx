'use client';

import { motion } from 'motion/react';
import { FaCalendarAlt, FaEnvelope } from 'react-icons/fa';
import MagicButton from './ui/magic-button';

const CALENDLY_URL = 'https://calendly.com/anthony-303devs/30min';

const Contact = () => {
	return (
		<section
			id='contact'
			className='scroll-mt-20 py-8 md:py-14'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className='relative overflow-hidden rounded-3xl border border-border bg-[linear-gradient(145deg,#0C081D,#1A1F2E)] px-8 py-10 text-center md:px-16 md:py-14'>
				{/* Background glows */}
				<div className='pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-main opacity-10 blur-3xl' />
				<div className='pointer-events-none absolute -bottom-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-blue-300 opacity-5 blur-3xl' />

				<p className='text-xs font-semibold tracking-widest text-purple-main uppercase'>
					Let&apos;s Talk
				</p>

				<h2 className='mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl'>
					Got something you want to build?
				</h2>

				<p className='mx-auto mt-5 max-w-xl text-base text-white/60'>
					Book a free 30-minute discovery call via Zoom. No pitch, no pressure
					— just an honest conversation about what you are trying to build and
					whether I am a good fit.
				</p>

				<div className='mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
					<a
						href={CALENDLY_URL}
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Book a free 30-minute discovery call'>
						<MagicButton
							title='Book a Zoom Call'
							icon={<FaCalendarAlt />}
							position='left'
						/>
					</a>

					<a
						href='mailto:anthony@303devs.com'
						className='flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-white/80 transition-all hover:border-white/40 hover:text-white'>
						<FaEnvelope size={13} />
						Send an Email
					</a>
				</div>

				{/* Trust line */}
				<p className='mt-10 text-xs text-white/30'>
					Typically responds within 24 hours · Free, no-obligation call
				</p>
			</motion.div>
		</section>
	);
};

export default Contact;

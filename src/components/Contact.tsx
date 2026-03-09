import { FaCalendarAlt } from 'react-icons/fa';
import MagicButton from './ui/magic-button';

const CALENDLY_URL = 'https://calendly.com/anthony-303devs/30min';

const Contact = () => {
	return (
		<section
			id='contact'
			className='scroll-mt-20 py-16 md:py-24'>
			<div className='relative overflow-hidden rounded-3xl border border-border bg-[linear-gradient(145deg,#0C081D,#1A1F2E)] px-8 py-16 text-center md:px-16 md:py-20'>
				{/* Background glow */}
				<div className='pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-main opacity-10 blur-3xl' />

				<p className='text-xs font-semibold tracking-widest text-purple-main uppercase'>
					Let&apos;s Talk
				</p>

				<h2 className='mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl'>
					Got an idea worth building?
				</h2>

				<p className='mx-auto mt-4 max-w-xl text-base text-white/60'>
					Book a free 30-minute discovery call via Zoom. No pitch, no pressure
					— just an honest conversation about what you are trying to build and
					whether we are a good fit.
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
				</div>

				<p className='mt-6 text-xs text-white/40'>
					Prefer email?{' '}
					<a
						href='mailto:anthony@303devs.com'
						className='underline underline-offset-2 transition-colors hover:text-white/70'>
						anthony@303devs.com
					</a>
				</p>
			</div>
		</section>
	);
};

export default Contact;

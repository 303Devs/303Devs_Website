import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className='border-t border-border py-8'>
			<div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
				<p className='text-sm text-muted-foreground'>
					&copy; {new Date().getFullYear()} 303Devs LLC. All rights reserved.
				</p>

				<div className='flex items-center gap-6'>
					<a
						href='mailto:anthony@303devs.com'
						className='text-sm text-muted-foreground transition-colors hover:text-foreground'>
						anthony@303devs.com
					</a>

					<a
						href='https://www.linkedin.com/in/anthony-merino/'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='LinkedIn'
						className='text-muted-foreground transition-colors hover:text-foreground'>
						<FaLinkedin size={18} />
					</a>

					<a
						href='https://github.com/303Devs'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='GitHub'
						className='text-muted-foreground transition-colors hover:text-foreground'>
						<FaGithub size={18} />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

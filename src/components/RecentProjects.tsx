import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { projectItems } from '@/data';

const RecentProjects = () => {
	return (
		<section
			id='projects'
			className='scroll-mt-20 py-8 md:py-14'>
			<p className='text-xs font-semibold tracking-widest text-purple-main uppercase'>
				My Work
			</p>
			<h2 className='mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl'>
				Recent Projects
			</h2>

			<ul className='mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2'>
				{projectItems.map((project) => {
					const isGitHub = project.link.includes('github.com');
					return (
						<li
							key={project.id}
							className='group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-[linear-gradient(145deg,#f4f4f7,#e3e3ee)] transition-all duration-300 hover:border-purple-main/40 hover:shadow-lg dark:bg-[linear-gradient(145deg,#0C081D,#1A1F2E)] dark:hover:shadow-none'>
							{/* Top accent line */}
							<span className='absolute inset-x-0 top-0 z-10 h-[2px] origin-left scale-x-0 bg-purple-main transition-transform duration-300 group-hover:scale-x-100' />

							{/* Image */}
							<div className='relative h-52 w-full overflow-hidden sm:h-60'>
								<Image
									src={project.img}
									alt={project.title}
									fill
									sizes='(max-width: 640px) 100vw, 50vw'
									className='object-cover object-center transition-transform duration-300 group-hover:scale-105'
								/>
								{/* Live badge */}
								{!isGitHub && (
									<span className='absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm'>
										<span className='h-1.5 w-1.5 rounded-full bg-green-400' />
										Live
									</span>
								)}
							</div>

							{/* Content */}
							<div className='flex flex-1 flex-col gap-3 p-6'>
								<h3 className='text-lg font-semibold text-foreground'>
									{project.title}
								</h3>
								<p className='text-sm leading-relaxed text-muted-foreground line-clamp-3'>
									{project.des}
								</p>

								{/* Footer */}
								<div className='mt-auto flex items-center justify-between pt-4'>
									{/* Tech icons */}
									<ul className='flex items-center'>
										{project.icons.map((icon, i) => (
											<li
												key={icon}
												className='flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background'
												style={{ transform: `translateX(-${i * 6}px)` }}>
												<Image
													src={icon}
													alt={icon}
													width={18}
													height={18}
													className='rounded-full'
												/>
											</li>
										))}
									</ul>

									{/* Link */}
									<a
										href={project.link}
										target='_blank'
										rel='noopener noreferrer'
										className='flex items-center gap-2 text-sm font-medium text-purple-main transition-opacity hover:opacity-70'>
										{isGitHub ? 'View Code' : 'Visit Site'}
										<FaArrowRight size={12} />
									</a>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default RecentProjects;

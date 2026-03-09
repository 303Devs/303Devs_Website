const steps = [
	{
		number: '01',
		title: 'Discovery',
		description:
			'We start with a conversation — not a contract. What problem are you solving? Who are the stakeholders? What does success actually look like? No code, no wireframes. Just listening.',
	},
	{
		number: '02',
		title: 'Define',
		description:
			'We narrow everything down to a clear, shared understanding of what we are building and why. Scope, priorities, and constraints get locked in before anything else moves forward.',
	},
	{
		number: '03',
		title: 'Design',
		description:
			'Mockups, user flows, and architecture diagrams. You see exactly what you are getting before a single line of production code is written. Changes here cost nothing.',
	},
	{
		number: '04',
		title: 'Build',
		description:
			'Iterative development with regular demos. You stay in the loop at every stage — no disappearing for weeks and emerging with something unrecognizable. Your feedback shapes the build in real time.',
	},
	{
		number: '05',
		title: 'Refine',
		description:
			'Edge cases, polish, performance. We close the gap between "it works" and "it is ready." This is where the details that matter to real users get handled.',
	},
	{
		number: '06',
		title: 'Launch & Support',
		description:
			'We ship it together and watch how it performs. Post-launch support is not an afterthought — it is part of the engagement.',
	},
];

const Process = () => {
	return (
		<section
			id='process'
			className='scroll-mt-20 py-16 md:py-24'>
			<div className='text-center'>
				<p className='text-xs font-semibold tracking-widest text-purple-main uppercase'>
					How We Work
				</p>
				<h2 className='mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl'>
					A Process Built Around Clarity
				</h2>
				<p className='mx-auto mt-4 max-w-2xl text-base text-muted-foreground'>
					Most projects fail because of miscommunication, not bad code. Every
					step here is designed to keep you informed, in control, and confident
					in what is being built.
				</p>
			</div>

			<div className='mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
				{steps.map((step) => (
					<div
						key={step.number}
						className='relative flex flex-col gap-3 rounded-3xl border border-border bg-[linear-gradient(145deg,#f4f4f7,#e3e3ee)] p-8 dark:bg-[linear-gradient(145deg,#0C081D,#1A1F2E)]'>
						<span className='text-4xl font-black tracking-tight text-purple-main opacity-40'>
							{step.number}
						</span>
						<h3 className='text-lg font-semibold text-foreground'>
							{step.title}
						</h3>
						<p className='text-sm leading-relaxed text-muted-foreground'>
							{step.description}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Process;

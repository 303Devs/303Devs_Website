export const navItems = [
	{ name: 'About', link: '#about' },
	{ name: 'Services', link: '#services' },
	{ name: 'Process', link: '#process' },
	{ name: 'Projects', link: '#projects' },
	{ name: 'Contact', link: '#contact' },
];

export const gridItems = [
	{
		id: 1,
		title: 'I start with your goals, not my assumptions.',
		description: '',
		className:
			'min-h-[320px] md:min-h-0 lg:col-span-3 md:col-span-6 md:row-span-4',
		imgClassName: 'h-full w-full',
		titleClassName: 'justify-end',
		img: '/vision.webp',
		spareImg: '',
	},
	{
		id: 2,
		title: 'Remote-first. Always in sync.',
		description:
			'Async-friendly and responsive. I keep you informed at every stage regardless of where you are.',
		className:
			'min-h-[280px] md:min-h-0 lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-start',
		img: '',
		spareImg: '',
	},
	{
		id: 3,
		title: 'My Services',
		description: 'I handle the complexity. You stay focused.',
		className:
			'min-h-[280px] md:min-h-0 lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: '',
		img: '',
		spareImg: '',
	},
	{
		id: 4,
		title: 'Technical depth that drives real outcomes.',
		description: 'JS, TS, and Node are home base. AI integration is the frontier.',
		className:
			'min-h-[200px] md:min-h-0 lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClassName: 'bg-transparent',
		titleClassName: 'justify-start',
		img: '',
		spareImg: '/b4.svg',
	},
	{
		id: 5,
		title: 'You work directly with the founder. No handoffs, no middlemen, no surprises.',
		description: 'The 303Devs Difference',
		className:
			'min-h-[280px] md:min-h-0 lg:col-span-3 md:col-span-3 md:row-span-2',
		imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60 blur-[2px]',
		titleClassName: 'justify-center md:justify-start lg:justify-center',
		img: '/b5.svg',
		spareImg: '/grid.svg',
	},
	{
		id: 6,
		title: 'Ready to build something real?',
		description: '',
		className:
			'min-h-[200px] md:min-h-0 lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName:
			'justify-center md:max-w-full max-w-60 text-center text-white drop-shadow-md',
		img: '',
		spareImg: '',
	},
];

export const mapDots = [
	{
		start: {
			lat: 64.2008,
			lng: -149.4937,
		}, // Alaska (Fairbanks)
		end: {
			lat: 34.0522,
			lng: -118.2437,
		}, // Los Angeles
	},
	{
		start: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
		end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
	},
	{
		start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
		end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
	},
	{
		start: { lat: 38.7223, lng: -9.1393 }, // Lisbon
		end: { lat: 51.5074, lng: -0.1278 }, // London
	},
	{
		start: { lat: 51.5074, lng: -0.1278 }, // London
		end: { lat: 28.6139, lng: 77.209 }, // New Delhi
	},
	{
		start: { lat: 28.6139, lng: 77.209 }, // New Delhi
		end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
	},
	{
		start: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
		end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
	},
	{
		start: { lat: -1.2921, lng: 36.8219 }, // Nairobi
		end: { lat: 40.014984, lng: -105.270546 }, // Boulder, CO
	},
	{
		start: { lat: 40.014984, lng: -105.270546 }, // Boulder, CO
		end: { lat: -33.865143, lng: 151.2099 }, // Sydney
	},
	{
		start: { lat: -33.865143, lng: 151.2099 }, // Sydney
		end: { lat: -33.447487, lng: -70.673676 }, // Santiago
	},
	{
		start: { lat: -33.447487, lng: -70.673676 }, // Santiago
		end: { lat: 64.2008, lng: -149.4937 }, // Fairbanks
	},
];

export const projectItems = [
	{
		id: 1,
		title: 'Civil Swap',
		des: 'A multi-chain DEX aggregator supporting Ethereum, Base, Polygon, Avalanche, and Arbitrum. Gas-free trades with C4C, fee-free onboarding, and full transaction transparency — no crypto experience required.',
		img: '/civil-swap.png',
		icons: ['/re.svg', '/ts.svg', '/tail.svg', '/solidity.webp', '/eth.webp'],
		link: 'https://swap.civilprotocol.io',
	},
	{
		id: 6,
		title: 'Civil Share',
		des: 'A Web3 crowdfunding platform where users connect wallets, create fundraising campaigns, and support causes with ETH — no crypto experience required.',
		img: '/civil-share.png',
		icons: ['/re.svg', '/tail.svg', '/solidity.webp', '/eth.webp'],
		link: 'https://share.civilprotocol.io',
	},
	{
		id: 2,
		title: 'HealthSync',
		des: 'A healthcare management platform where patients register, book appointments, and track their medical history — with a dedicated admin dashboard for managing doctors and schedules.',
		img: '/healthsync.png',
		icons: ['/nextjs.svg', '/ts.svg', '/tail.svg'],
		link: 'https://healthsync.303devs.com',
	},
	{
		id: 3,
		title: 'VirtualStitch',
		des: 'Design custom apparel in seconds. Describe your vision and watch AI bring it to life on a real-time 3D t-shirt — then order it.',
		img: '/virtualstitch.png',
		icons: ['/nextjs.svg', '/ts.svg', '/tail.svg', '/openai.webp', '/three.svg'],
		link: 'https://virtual-stitch.303devs.com',
	},
	{
		id: 4,
		title: 'CampingBuddy',
		des: 'Plan your perfect outdoor trip — AI-powered packing lists, meal planning, gear recommendations, trail maps, weather forecasts, campsite reviews, and a gear swap marketplace in one place.',
		img: '/campingbuddy.png',
		icons: ['/re.svg', '/ts.svg', '/tail.svg', '/express.webp', '/postgresql.webp', '/openai.webp'],
		link: 'https://campingbuddy.app',
	},
	{
		id: 5,
		title: 'Sherwood Forest',
		des: 'A mobile banking concept — manage accounts, track a crypto portfolio, monitor investments, and send money, all from one app.',
		img: '/sherwood.png',
		icons: ['/re.svg', '/ts.svg'],
		link: 'https://sherwood.303devs.com',
	},
];

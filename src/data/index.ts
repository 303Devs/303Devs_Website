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
		title: 'We start with your goals, not our assumptions.',
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
			'Async-friendly and responsive. We keep you informed at every stage regardless of where you are.',
		className:
			'min-h-[280px] md:min-h-0 lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-start',
		img: '',
		spareImg: '',
	},
	{
		id: 3,
		title: 'Our Services',
		description: 'We handle the complexity. You stay focused.',
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
		description: 'JS, TS, and Node are home base. AI integration and Web3 are the frontier.',
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
		title: 'HealthSync',
		des: 'A healthcare management platform covering patient registration, appointment scheduling, insurance tracking, medical history, and an admin dashboard for managing doctors and appointments.',
		img: '/healthsync.png',
		icons: ['/nextjs.svg', '/ts.svg', '/tail.svg', '/re.svg'],
		link: 'https://health-sync-one.vercel.app',
	},
	{
		id: 2,
		title: 'Civil Swap',
		des: 'A multi-chain DEX aggregator supporting Ethereum, Base, Polygon, Avalanche, and Arbitrum. Gas-free trades with C4C, fee-free onboarding, and full transaction transparency — no crypto experience required.',
		img: '/civil-swap.png',
		icons: ['/re.svg', '/ts.svg', '/solidity.webp', '/eth.webp', '/polygon.webp'],
		link: 'https://swap.civilprotocol.io',
	},
	{
		id: 4,
		title: 'Civil Share',
		des: 'A Web3 crowdfunding platform where users connect wallets, create fundraising campaigns, and support causes with ETH. Built on Ethereum with Solidity smart contracts and Thirdweb.',
		img: '/civil-protocol.webp',
		icons: ['/re.svg', '/tail.svg', '/ts.svg', '/solidity.webp', '/eth.webp'],
		link: 'https://share.civilprotocol.io',
	},
	{
		id: 5,
		title: 'Civil Protocol',
		des: 'The subscription and access portal for the Civil Protocol ecosystem. Features user authentication, subscription management, email notifications, and a real-time dashboard.',
		img: '/civil-protocol.webp',
		icons: ['/re.svg', '/ts.svg', '/express.webp', '/drizzle.webp'],
		link: 'https://github.com/303Devs/Civil_Protocol',
	},
	{
		id: 6,
		title: 'VirtualStitch',
		des: 'A 3D apparel customization platform with AI-generated designs. Describe your vision and see it applied to a real-time 3D t-shirt model, powered by OpenAI and Three.js.',
		img: '/bashful-elephant.webp',
		icons: ['/nextjs.svg', '/ts.svg', '/tail.svg', '/openai.webp', '/three.svg'],
		link: 'https://github.com/303Devs/VirtualStitch',
	},
	{
		id: 7,
		title: 'CampingBuddy',
		des: 'A full-featured outdoor trip planning app with AI-powered packing lists, meal planning, gear recommendations, interactive trail maps, weather forecasts, campsite reviews, and a gear swap marketplace.',
		img: '/vision.webp',
		icons: ['/re.svg', '/ts.svg', '/tail.svg', '/postgresql.webp', '/openai.webp'],
		link: 'https://github.com/303Devs/CampingBuddy',
	},
	{
		id: 8,
		title: 'Sherwood Forest',
		des: 'A React Native mobile banking app with five core modules: home dashboard, crypto portfolio, investments, lifestyle spending, and money transfers. Built with Expo and Clerk authentication.',
		img: '/bg.png',
		icons: ['/re.svg', '/ts.svg', '/nextjs.svg'],
		link: 'https://github.com/303Devs/Sherwood_Forest',
	},
	{
		id: 9,
		title: 'MyHealthCoach',
		des: 'A health and fitness tracking app with workout logging, calorie tracking, and progress visualization. Full-stack PERN application with Docker support, CI/CD pipeline, and Jest test coverage.',
		img: '/my-health-coach.webp',
		icons: ['/nextjs.svg', '/nodejs.webp', '/ts.svg', '/postgresql.webp'],
		link: 'https://github.com/303Devs/MyHealthCoach',
	},
	{
		id: 10,
		title: 'Red Bean Shop',
		des: 'An e-commerce platform featuring a dynamic product overview with image galleries, ratings, related items, and a shopping cart. Built with React, Node.js, Redis, Nginx, and MongoDB.',
		img: '/atelier.webp',
		icons: ['/re.svg', '/redis.webp', '/nginx.webp', '/javascript.webp', '/mongodb.webp'],
		link: 'https://github.com/303Devs/Red_Bean_Shop',
	},
];

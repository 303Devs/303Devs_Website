import React from 'react';
import FloatingNav from '@/components/ui/floating-nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Grid from '@/components/Grid';
import Process from '@/components/Process';
import RecentProjects from '@/components/RecentProjects';
import Contact from '@/components/Contact';
import { navItems } from '@/data';

const Home = () => {
	return (
		<main className='relative mx-auto flex w-full flex-col items-center justify-center overflow-x-hidden bg-background px-4 text-foreground sm:px-6 md:px-8 lg:px-10'>
			<div className='w-full max-w-7xl'>
				<FloatingNav navItems={navItems} />
				<Hero />
				<About />
				<Grid />
				<Process />
				<RecentProjects />
				<Contact />
			</div>
		</main>
	);
};

export default Home;

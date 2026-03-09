import type { Metadata } from 'next';
import { Red_Hat_Text } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './provider';

const redHat = Red_Hat_Text({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-red',
});

export const metadata: Metadata = {
	metadataBase: new URL('https://303devs.com'),
	title: '303Devs | Application Development for Startups & Growing Companies',
	description:
		'303Devs is a Colorado-based software studio building web, mobile, and AI-powered applications for startups and growing companies. Work directly with the founder — no handoffs, no middlemen.',
	openGraph: {
		title: '303Devs | Application Development for Startups & Growing Companies',
		description:
			'Colorado-based studio building web, mobile, and software that holds up. Work directly with the founder — no handoffs, no middlemen.',
		url: 'https://303devs.com',
		siteName: '303Devs',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: '303Devs | Application Development for Startups & Growing Companies',
		description:
			'Colorado-based studio building web, mobile, and software that holds up.',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// Add suppressHydrationWarning to <html> to prevent warnings from next-themes updates; it only affects the <html> element.
	return (
		<html
			lang='en'
			suppressHydrationWarning
			className={redHat.variable}>
			<body className='min-h-screen bg-background text-foreground'>
				<ThemeProvider
					attribute='class'
					forcedTheme='dark'
					disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}

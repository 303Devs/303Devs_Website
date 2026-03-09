import { ImageResponse } from 'next/og';

export const alt = '303Devs — Application Development for Startups & Growing Companies';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OgImage() {
	const baseUrl = process.env.VERCEL_URL
		? `https://${process.env.VERCEL_URL}`
		: 'http://localhost:3000';

	const emblemData = await fetch(`${baseUrl}/emblem-og.png`)
		.then((r) => r.arrayBuffer())
		.catch(() => null);

	const emblemSrc = emblemData
		? `data:image/png;base64,${Buffer.from(emblemData).toString('base64')}`
		: null;

	return new ImageResponse(
		(
			<div
				style={{
					width: '1200px',
					height: '630px',
					background: 'linear-gradient(145deg, #0C081D 0%, #1A1F2E 100%)',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					fontFamily: 'sans-serif',
					position: 'relative',
				}}>
				{/* Purple glow */}
				<div
					style={{
						position: 'absolute',
						top: '-80px',
						left: '50%',
						transform: 'translateX(-50%)',
						width: '600px',
						height: '400px',
						background:
							'radial-gradient(ellipse, rgba(147,0,243,0.25) 0%, transparent 70%)',
					}}
				/>

				{/* Emblem */}
				{emblemSrc && (
					// eslint-disable-next-line @next/next/no-img-element
					<img
						src={emblemSrc}
						alt='303Devs emblem'
						width={100}
						height={100}
						style={{ marginBottom: '32px' }}
					/>
				)}

				{/* Studio name */}
				<div
					style={{
						fontSize: '72px',
						fontWeight: '700',
						color: '#ffffff',
						letterSpacing: '-2px',
						marginBottom: '16px',
					}}>
					303Devs
				</div>

				{/* Tagline */}
				<div
					style={{
						fontSize: '28px',
						fontWeight: '400',
						color: 'rgba(255,255,255,0.6)',
						textAlign: 'center',
						maxWidth: '700px',
					}}>
					Application Development for Startups & Growing Companies
				</div>

				{/* Bottom accent */}
				<div
					style={{
						position: 'absolute',
						bottom: '48px',
						display: 'flex',
						alignItems: 'center',
						gap: '8px',
					}}>
					<div
						style={{
							width: '8px',
							height: '8px',
							borderRadius: '50%',
							background: '#9300F3',
						}}
					/>
					<div style={{ fontSize: '18px', color: 'rgba(255,255,255,0.4)' }}>
						303devs.com
					</div>
				</div>
			</div>
		),
		{ ...size }
	);
}

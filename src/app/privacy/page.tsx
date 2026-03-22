import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Privacy Policy | 303Devs',
	description: 'Privacy policy for 303Devs LLC and its products.',
};

export default function PrivacyPolicy() {
	return (
		<main className='min-h-screen bg-background text-foreground'>
			<div className='max-w-3xl mx-auto px-6 py-16'>
				<h1 className='text-3xl font-bold mb-2'>Privacy Policy</h1>
				<p className='text-sm text-muted-foreground mb-10'>
					Last updated: March 22, 2026
				</p>

				<div className='space-y-8 text-muted-foreground leading-relaxed'>
					<section>
						<h2 className='text-xl font-semibold text-foreground mb-3'>
							Who We Are
						</h2>
						<p>
							303Devs LLC (&quot;303Devs,&quot; &quot;we,&quot; &quot;us&quot;) is a software studio
							based in Boulder, Colorado. We build web applications, mobile
							applications, and software products for startups and growing
							companies. This policy covers our website at 303devs.com and any
							products or services we operate, including CampingBuddy.
						</p>
					</section>

					<section>
						<h2 className='text-xl font-semibold text-foreground mb-3'>
							What We Collect
						</h2>
						<p className='mb-3'>
							We collect only what we need to provide our services:
						</p>
						<ul className='list-disc pl-6 space-y-2'>
							<li>
								<strong className='text-foreground'>Contact information</strong>{' '}
								— name, email address, and any details you provide when you
								reach out to us via our contact form or email.
							</li>
							<li>
								<strong className='text-foreground'>Account information</strong>{' '}
								— if you create an account on one of our products (e.g.,
								CampingBuddy), we collect the information needed to manage your
								account, such as your name, email, and profile details.
							</li>
							<li>
								<strong className='text-foreground'>Usage data</strong> — basic
								analytics about how you use our sites and products (pages
								visited, features used). We use this to improve our products,
								not to build advertising profiles.
							</li>
							<li>
								<strong className='text-foreground'>Payment information</strong>{' '}
								— if you purchase a subscription or service, payment processing
								is handled by Stripe. We do not store your credit card
								information directly.
							</li>
						</ul>
					</section>

					<section>
						<h2 className='text-xl font-semibold text-foreground mb-3'>
							How We Use Your Information
						</h2>
						<ul className='list-disc pl-6 space-y-2'>
							<li>To provide and improve our products and services</li>
							<li>To respond to your inquiries and support requests</li>
							<li>To process payments and manage subscriptions</li>
							<li>To send important product updates (not marketing spam)</li>
							<li>To comply with legal obligations</li>
						</ul>
					</section>

					<section>
						<h2 className='text-xl font-semibold text-foreground mb-3'>
							What We Don&apos;t Do
						</h2>
						<ul className='list-disc pl-6 space-y-2'>
							<li>We do not sell your personal data. Ever.</li>
							<li>We do not share your data with advertisers.</li>
							<li>
								We do not use your data to build advertising or tracking
								profiles.
							</li>
							<li>
								We do not send unsolicited marketing emails unless you
								explicitly opt in.
							</li>
						</ul>
					</section>

					<section>
						<h2 className='text-xl font-semibold text-foreground mb-3'>
							Third-Party Services
						</h2>
						<p>
							We use a limited number of third-party services to operate our
							products. These include hosting providers (Vercel), payment
							processing (Stripe), database services (Neon), and AI services
							(OpenAI) for product features like trip planning and
							recommendations. Each of these providers has their own privacy
							policies governing how they handle data.
						</p>
					</section>

					<section>
						<h2 className='text-xl font-semibold text-foreground mb-3'>
							Data Security
						</h2>
						<p>
							We take reasonable measures to protect your information, including
							encryption in transit (HTTPS), secure authentication, and access
							controls. No system is perfectly secure, but we treat your data
							with the same care we&apos;d want for our own.
						</p>
					</section>

					<section>
						<h2 className='text-xl font-semibold text-foreground mb-3'>
							Your Rights
						</h2>
						<p>
							You can request access to, correction of, or deletion of your
							personal data at any time. If you have an account on one of our
							products, you can update or delete your information through your
							account settings. For any other requests, contact us directly.
						</p>
					</section>

					<section>
						<h2 className='text-xl font-semibold text-foreground mb-3'>
							Children&apos;s Privacy
						</h2>
						<p>
							Our services are not directed at children under 13. We do not
							knowingly collect personal information from children under 13.
						</p>
					</section>

					<section>
						<h2 className='text-xl font-semibold text-foreground mb-3'>
							Changes to This Policy
						</h2>
						<p>
							We may update this policy as our products and services evolve. If
							we make significant changes, we will notify users through our
							products or website. The &quot;last updated&quot; date at the top of this
							page reflects the most recent revision.
						</p>
					</section>

					<section>
						<h2 className='text-xl font-semibold text-foreground mb-3'>
							Contact
						</h2>
						<p>
							If you have questions about this privacy policy or how we handle
							your data:
						</p>
						<p className='mt-2'>
							<strong className='text-foreground'>303Devs LLC</strong>
							<br />
							Boulder, CO
							<br />
							<a
								href='mailto:admin@303devs.com'
								className='text-primary hover:underline'>
								admin@303devs.com
							</a>
						</p>
					</section>
				</div>
			</div>
		</main>
	);
}

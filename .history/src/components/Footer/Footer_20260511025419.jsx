import React from 'react'
import Image from 'next/image'
import logo from '@/assets/images/Logo.svg'
import styles from './Footer.module.css'

const footerSections = [
	{
		title: 'About',
		links: [
			{ label: 'History', href: '/history' },
			{ label: 'Vision', href: '/about/mission' },
			{ label: 'Leadership', href: '/about/leadership' },
		],
	},
	{
		title: 'Locations',
		links: [
			{ label: 'Chinatown', href: '/locations/chinatown' },
			{ label: 'Quincy', href: '/locations/quincy' },
			{ label: 'Newton', href: '/locations/newton' },
		],
	},
	{
		title: 'Social',
		links: [
			{ label: 'Instagram', href: 'https://instagram.com' },
			{ label: 'Facebook', href: 'https://facebook.com' },
			{ label: 'YouTube', href: 'https://youtube.com' },
		],
	},
	{
		title: 'More',
		links: [
			{ label: 'Events', href: '/events' },
			{ label: 'Giving', href: '/giving' },
			{ label: 'Contact', href: '/contact' },
		],
	},
]

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.grid}>
				<div className={styles.logoColumn}>
					<Image src={logo} alt='Logo of CCUC Chinatown' width={220} />
				</div>

				{footerSections.map((section) => (
					<div key={section.title} className={styles.linkColumn}>
						<h3 className={styles.heading}>{section.title}</h3>
						<div className={styles.links}>
							{section.links.map((link) => (
								<a
									key={link.label}
									href={link.href}
									className={styles.link}
									target={
										link.href.startsWith('http') ? '_blank' : undefined
									}
									rel={
										link.href.startsWith('http')
											? 'noreferrer noopener'
											: undefined
									}
								>
									{link.label}
								</a>
							))}
						</div>
					</div>
				))}
			</div>
		</footer>
	)
}

export default Footer

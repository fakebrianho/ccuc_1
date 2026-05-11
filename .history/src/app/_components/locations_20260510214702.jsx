import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './locations.module.css'
import chinatown from '@/assets/images/chinatown.png'
import south from '@/assets/images/south.png'
import west from '@/assets/images/west.png'

const defaultLocationCards = [
	{
		title: 'CCUC Chinatown',
		image: chinatown,
		description: '2301 S. Wentworth',
		href: '/locations/chinatown',
		buttonLabel: 'View Location',
	},
	{
		title: 'CCUC South',
		image: south,
		description: '3000 S. Wallace St.',
		href: '/locations/south',
		buttonLabel: 'View Location',
	},
	{
		title: 'CCUC West',
		image: west,
		description: '1400 Maple Ave',
		href: '/locations/west',
		buttonLabel: 'View Location',
	},
]

function Locations({ cards = defaultLocationCards }) {
	return (
		<section className={styles.section}>
			<div className={styles.cta}>
				<h3>Join Us Sundayh</h3>
				<p>Online or at any of our various locations across Illinois</p>
			</div>
			<div className={styles.grid}>
				{cards.map((card) => (
					<article key={card.title} className={styles.card}>
						<h3 className={styles.title}>{card.title}</h3>
						<div className={styles.imageWrap}>
							<Image
								src={card.image}
								alt={`${card.title} image`}
								fill
								className={styles.image}
							/>
						</div>
						<p className={styles.description}>{card.description}</p>
						<Link href={card.href} className={styles.button}>
							{card.buttonLabel}
						</Link>
					</article>
				))}
			</div>
		</section>
	)
}

export default Locations

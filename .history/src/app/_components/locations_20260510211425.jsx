import React from 'react'
import Image from 'next/image'
import styles from './locations.module.css'

const locationCards = [
	{
		title: 'CCUC Chinatown',
		image: '/globe.svg',
		description: '2301 S. Wentworth',
	},
	{
		title: 'CCUC South',
		image: '/window.svg',
		description: '3000 S. Wallace St.',
	},
	{
		title: 'CCUC West',
		image: '/file.svg',
		description: '',
	},
]

function Locations() {
	return (
		<section className={styles.section}>
			<div className={styles.grid}>
				{locationCards.map((card) => (
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
					</article>
				))}
			</div>
		</section>
	)
}

export default Locations

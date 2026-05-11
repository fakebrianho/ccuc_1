import React from 'react'
import Image from 'next/image'
import styles from './locations.module.css'

const locationCards = [
	{
		title: 'CCUC Chinatown',
		image: '/globe.svg',
		description: 'Weekly gatherings, community meals, and outreach in the heart of Chinatown.',
	},
	{
		title: 'CCUC South',
		image: '/window.svg',
		description: 'A central location focused on discipleship, prayer, and practical city service.',
	},
	{
		title: 'CCUC West',
		image: '/file.svg',
		description: 'Family-centered ministries, local partnerships, and neighborhood support programs.',
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

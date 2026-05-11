'use client'

import React from 'react'
import Image from 'next/image'
import styles from './locations.module.css'
import chinatown from '@/assets/images/chinatown.png'
import south from '@/assets/images/south.png'
import west from '@/assets/images/west.png'
import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/translations'

const locationData = [
	{
		image: chinatown,
		mapsUrl: 'https://www.google.com/maps/search/?api=1&query=2301+S+Wentworth+Ave+Chicago+IL',
		address: '2301 S. Wentworth',
		services: [
			{ label: 'English Service', time: '9:45 AM' },
			{ label: 'Mandarin Service', time: '9:45 AM' },
			{ label: 'Cantonese Service', time: '11:45 AM' },
			{ label: "Children's Ministry", time: '9:45 AM' },
		],
	},
	{
		image: south,
		mapsUrl: 'https://www.google.com/maps/search/?api=1&query=3000+S+Wallace+St+Chicago+IL',
		address: '3000 S. Wallace St.',
		services: [
			{ label: 'Mandarin Service', time: '8:45 AM' },
			{ label: 'Cantonese Service', time: '11:30 AM' },
		],
	},
	{
		image: west,
		mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Avery+Coonley+School+1400+Maple+Ave+Downers+Grove+IL+60515',
		address: '1400 Maple Ave, Downers Grove',
		services: [
			{ label: 'Mandarin Service', time: '9:30 AM' },
		],
	},
]

const locationTitles = {
	en: ['CCUC Chinatown', 'CCUC South', 'CCUC West'],
	zh: ['CCUC 唐人街', 'CCUC 南区', 'CCUC 西区'],
}

function Locations() {
	const { lang } = useLanguage()
	const tx = t[lang].locations
	const titles = locationTitles[lang]

	return (
		<section className={styles.section}>
			<div className={styles.cta}>
				<h3>{tx.heading}</h3>
				<p>{tx.subheading}</p>
			</div>
			<div className={styles.grid}>
				{locationData.map((loc, i) => (
					<article key={loc.mapsUrl} className={styles.card}>
						<div className={styles.imageWrap}>
							<Image
								src={loc.image}
								alt={`${titles[i]} image`}
								fill
								className={styles.image}
							/>
						</div>
						<div className={styles.cardBody}>
							<h3 className={styles.title}>{titles[i]}</h3>
							<p className={styles.address}>{loc.address}</p>
							<ul className={styles.services}>
								{loc.services.map((s) => (
									<li key={s.label} className={styles.serviceRow}>
										<span className={styles.serviceLabel}>{s.label}</span>
										<span className={styles.serviceTime}>{s.time}</span>
									</li>
								))}
							</ul>
						</div>
						<a
							href={loc.mapsUrl}
							className={styles.button}
							target='_blank'
							rel='noopener noreferrer'
						>
							{tx.viewLocation}
						</a>
					</article>
				))}
			</div>
		</section>
	)
}

export default Locations

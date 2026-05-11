'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './locations.module.css'
import chinatown from '@/assets/images/chinatown.png'
import south from '@/assets/images/south.png'
import west from '@/assets/images/west.png'
import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/translations'

const locationImages = [chinatown, south, west]
const locationHrefs = ['/locations/chinatown', '/locations/quincy', '/locations/newton']
const locationTitles = {
	en: ['CCUC Chinatown', 'CCUC South', 'CCUC West'],
	zh: ['CCUC 唐人街', 'CCUC 南区', 'CCUC 西区'],
}
const locationAddresses = ['2301 S. Wentworth', '3000 S. Wallace St.', '1400 Maple Ave']

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
				{locationImages.map((img, i) => (
					<article key={locationHrefs[i]} className={styles.card}>
						<h3 className={styles.title}>{titles[i]}</h3>
						<div className={styles.imageWrap}>
							<Image
								src={img}
								alt={`${titles[i]} image`}
								fill
								className={styles.image}
							/>
						</div>
						<p className={styles.description}>{locationAddresses[i]}</p>
						<Link href={locationHrefs[i]} className={styles.button}>
							{tx.viewLocation}
						</Link>
					</article>
				))}
			</div>
		</section>
	)
}

export default Locations

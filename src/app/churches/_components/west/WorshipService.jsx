'use client'

import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/translations'
import Carousel from '@/components/Carousel/Carousel'
import img1 from '@/assets/images/west.png'
import img2 from '@/assets/images/1.jpg'
import img3 from '@/assets/images/2.jpg'
import img4 from '@/assets/images/3.jpg'
import styles from '../chinatown/chinatown.module.css'

const slides = [
	{ image: img1 },
	{ image: img2 },
	{ image: img3 },
	{ image: img4 },
]

export default function WorshipService() {
	const { lang } = useLanguage()
	const tx = t[lang].churches.west.worship

	return (
		<section className={styles.section}>
			<h2 className={styles.heading}>{tx.heading}</h2>
			<p className={styles.detail}>
				{tx.detail_1}<strong>{tx.detail_bold1}</strong>{tx.detail_2}
			</p>
			<div className={styles.links}>
				<a className={styles.link} href="#">{tx.bulletin}</a>
				<a className={styles.link} href="#">{tx.livestream}</a>
			</div>
			<div className={styles.carouselWrap}>
				<Carousel slides={slides} autoPlayInterval={4000} />
			</div>
		</section>
	)
}

'use client'

import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/translations'
import Carousel from '@/components/Carousel/Carousel'
import Accordion from '@/app/about/_components/Accordion'
import img1 from '@/assets/images/4.jpg'
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

export default function YouthMinistries() {
	const { lang } = useLanguage()
	const tx = t[lang].churches.south.youth

	return (
		<section className={styles.section}>
			<h2 className={styles.heading}>{tx.heading}</h2>
			<div className={styles.accordionWrap}>
				<Accordion items={tx.items} />
			</div>
			<div className={styles.carouselWrap}>
				<Carousel slides={slides} autoPlayInterval={5500} />
			</div>
		</section>
	)
}

'use client'

import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/translations'
import Carousel from '@/components/Carousel/Carousel'
import img1 from '@/assets/images/2.jpg'
import img2 from '@/assets/images/3.jpg'
import img3 from '@/assets/images/4.jpg'
import img4 from '@/assets/images/1.jpg'
import styles from '../chinatown/chinatown.module.css'

const slides = [
	{ image: img1 },
	{ image: img2 },
	{ image: img3 },
	{ image: img4 },
]

export default function PrayerMeeting() {
	const { lang } = useLanguage()
	const tx = t[lang].churches.south.prayer

	return (
		<section className={styles.section}>
			<div className={styles.prayerGrid}>
				<div className={styles.prayerLeft}>
					<h2 className={styles.heading}>{tx.heading}</h2>
					<p className={styles.detail}>{tx.detail}</p>
					<p className={styles.detail}>{tx.zoomId}</p>
					<p className={styles.detail} style={{ marginBottom: '1.5rem' }}>{tx.zoomPwd}</p>
					<p className={styles.body}>{tx.body}</p>
					<div className={styles.links}>
						<a className={styles.link} href="#">{tx.guide}</a>
						<a className={`${styles.link} ${styles.linkButton}`} href="#">{tx.bulletin}</a>
					</div>
				</div>
				<div className={styles.prayerCarousel}>
					<Carousel slides={slides} autoPlayInterval={4500} />
				</div>
			</div>
		</section>
	)
}

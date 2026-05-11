'use client'

import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/translations'
import Carousel from '@/components/Carousel/Carousel'
import img1 from '@/assets/images/1.jpg'
import img2 from '@/assets/images/2.jpg'
import img3 from '@/assets/images/3.jpg'
import img4 from '@/assets/images/4.jpg'
import styles from './chinatown.module.css'

const slides = [
	{ image: img1 },
	{ image: img2 },
	{ image: img3 },
	{ image: img4 },
]

export default function WorshipService() {
	const { lang } = useLanguage()
	const tx = t[lang].churches.chinatown.worship

	return (
		<section className={styles.section}>
			<h2 className={styles.heading}>{tx.heading}</h2>
			<p className={styles.congregationLabel}>{tx.englishLabel}</p>
			<p className={styles.detail}>
				{tx.detail_1}<strong>{tx.detail_bold1}</strong>{tx.detail_2}<strong>{tx.detail_bold2}</strong>{tx.detail_3}
			</p>
			<div className={styles.links}>
				<a className={styles.link} href="#">{tx.bulletin}</a>
				<a className={styles.link} href="#">{tx.livestream}</a>
			</div>
			<p className={styles.congregationLabel}>{tx.chineseLabel}</p>
			<p className={styles.detail}>{tx.chineseDetail}</p>
			<div className={styles.links}>
				<a className={styles.link} href="#">{tx.chineseBulletin}</a>
			</div>

			<p className={styles.congregationLabel}>{tx.mandarinLabel}</p>
			<p className={styles.detail}>
				{tx.mandarinDetail_1}<strong>{tx.mandarinDetail_bold1}</strong>{tx.mandarinDetail_2}<strong>{tx.mandarinDetail_bold2}</strong>{tx.mandarinDetail_3}<strong>{tx.mandarinDetail_bold3}</strong>{tx.mandarinDetail_4}
			</p>
			<div className={styles.links}>
				<a className={styles.link} href="#">{tx.mandarinBulletin}</a>
				<a className={styles.link} href="#">{tx.mandarinLivestream}</a>
			</div>
			<div className={styles.carouselWrap}>
				<Carousel slides={slides} autoPlayInterval={4000} />
			</div>
		</section>
	)
}

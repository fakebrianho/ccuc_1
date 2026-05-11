'use client'

import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/translations'
import Carousel from '@/components/Carousel/Carousel'
import img1 from '@/assets/images/2.jpg'
import img2 from '@/assets/images/3.jpg'
import img3 from '@/assets/images/4.jpg'
import img4 from '@/assets/images/1.jpg'
import styles from './chinatown.module.css'

const slides = [
	{ image: img1 },
	{ image: img2 },
	{ image: img3 },
	{ image: img4 },
]

export default function PrayerMeeting() {
	const { lang } = useLanguage()
	const tx = t[lang].churches.chinatown.prayer

	return (
		<section className={styles.section}>
			<div className={styles.prayerGrid}>
				<div className={styles.prayerLeft}>
					<h2 className={styles.heading}>{tx.heading}</h2>

					<p className={styles.congregationLabel}>{tx.englishLabel}</p>
					<p className={styles.detail}>
						{tx.detail_1}<strong>{tx.detail_bold1}</strong>{tx.detail_2}<strong>{tx.detail_bold2}</strong>{tx.detail_3}<strong>{tx.detail_bold3}</strong>{tx.detail_4}
					</p>
					<div className={styles.links}>
						<a className={styles.link} href="#">{tx.bulletinLink}</a>
						<a className={styles.link} href="#">{tx.guideLink}</a>
						<a className={styles.link} href="#">{tx.remoteLink}</a>
						<a className={`${styles.link} ${styles.linkButton}`} href="#" target="_blank" rel="noreferrer">
							{tx.zoomLink}
						</a>
					</div>

					<p className={styles.congregationLabel}>{tx.cantoneseLabel}</p>
					<p className={styles.detail}>
						{tx.cantoneseDetail_1}<strong>{tx.cantoneseDetail_bold1}</strong>{tx.cantoneseDetail_2}<strong>{tx.cantoneseDetail_bold2}</strong>{tx.cantoneseDetail_3}<strong>{tx.cantoneseDetail_bold3}</strong>{tx.cantoneseDetail_4}
					</p>
					<p className={styles.body}>{tx.cantoneseBody}</p>
					<div className={styles.links}>
						<a className={styles.link} href="#">{tx.cantoneseBulletin}</a>
						<a className={`${styles.link} ${styles.linkButton}`} href="#" target="_blank" rel="noreferrer">
							{tx.cantoneseZoom}
						</a>
					</div>
				<p className={styles.congregationLabel}>{tx.mandarinLabel}</p>
					<p className={styles.detail}>{tx.mandarinDetail}</p>
					<p className={styles.body}>{tx.mandarinBody}</p>
					<p className={styles.detail}>
						<a className={styles.link} href={`mailto:${tx.mandarinContactEmail}`}>
							{tx.mandarinContact}
						</a>
					</p>
					<div className={styles.links}>
						<a className={styles.link} href="#">{tx.mandarinBulletin}</a>
					</div>
				</div>
				<div className={styles.prayerCarousel}>
					<Carousel slides={slides} autoPlayInterval={4500} />
				</div>
			</div>
		</section>
	)
}

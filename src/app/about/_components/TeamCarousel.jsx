'use client'

import { useRef } from 'react'
import Image from 'next/image'
import img1 from '@/assets/images/1.jpg'
import img2 from '@/assets/images/2.jpg'
import img3 from '@/assets/images/3.jpg'
import img4 from '@/assets/images/4.jpg'
import styles from './TeamCarousel.module.css'

const members = [
	{ image: img1, name: 'Rev. Bob Wong', title: 'Associate Pastor, Chinatown English' },
	{ image: img2, name: 'Rev. Timothy Pang', title: 'Associate Pastor, Chinatown Cantonese' },
	{ image: img3, name: 'Rev. Lenny Dai', title: 'Assistant Pastor, Chinatown Cantonese' },
	{ image: img4, name: 'Min. Sally Song', title: 'Pastoral Staff, Chinatown Cantonese' },
	{ image: img1, name: 'Min. Sen Xu', title: 'Pastoral Staff, CCUC West' },
	{ image: img2, name: 'Min. Yong Liu', title: 'Pastoral Staff, Chinatown Mandarin' },
	{ image: img3, name: 'Min. Tiffany Yeh', title: 'Pastoral Staff, Chinatown' },
	{ image: img4, name: 'Chris Javier', title: 'Pastoral Staff, Chinatown English' },
	{ image: img1, name: 'Erica Tam-Wang', title: 'Music Director' },
	{ image: img2, name: 'Zachary Cho', title: "Children's Ministry Coordinator" },
	{ image: img3, name: 'Justin Yau', title: 'English Youth Ministry Director' },
]

export default function TeamCarousel() {
	const trackRef = useRef(null)

	const scroll = (dir) => {
		trackRef.current?.scrollBy({ left: dir * 260, behavior: 'smooth' })
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.track} ref={trackRef}>
				{members.map((m, i) => (
					<div key={i} className={styles.card}>
						<div className={styles.imageWrap}>
							<Image src={m.image} alt={m.name} fill className={styles.image} />
						</div>
						<p className={styles.name}>{m.name}</p>
						<p className={styles.title}>{m.title}</p>
					</div>
				))}
			</div>
			<button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={() => scroll(-1)} aria-label='Scroll left'>
				<svg width='18' height='18' viewBox='0 0 20 20' fill='none'>
					<path d='M13 3L6 10L13 17' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
				</svg>
			</button>
			<button className={`${styles.arrow} ${styles.arrowRight}`} onClick={() => scroll(1)} aria-label='Scroll right'>
				<svg width='18' height='18' viewBox='0 0 20 20' fill='none'>
					<path d='M7 3L14 10L7 17' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
				</svg>
			</button>
		</div>
	)
}

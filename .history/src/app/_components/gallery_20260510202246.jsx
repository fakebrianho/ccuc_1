/* eslint-disable react/no-array-index-key */
'use client'

import { useLayoutEffect, useRef } from 'react'
import image1 from '@/assets/images/1.jpg'
import image2 from '@/assets/images/2.jpg'
import image3 from '@/assets/images/3.jpg'
import image4 from '@/assets/images/4.jpg'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './gallery.module.css'

gsap.registerPlugin(ScrollTrigger)

const galleryImages = [
	{ src: image1, alt: 'Gallery image 1', side: 'left' },
	{ src: image2, alt: 'Gallery image 2', side: 'right' },
	{ src: image3, alt: 'Gallery image 3', side: 'left' },
	{ src: image4, alt: 'Gallery image 4', side: 'right' },
]

function Gallery() {
	const sectionRef = useRef(null)

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const cards = gsap.utils.toArray('[data-gallery-card]')
			if (!cards.length) return

			gsap.set(cards, {
				opacity: 0,
				y: 80,
				x: (_, target) => (target.dataset.side === 'left' ? -70 : 70),
			})

			gsap.to(cards, {
				opacity: 1,
				y: 0,
				x: 0,
				duration: 0.85,
				ease: 'power3.out',
				stagger: 0.16,
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 80%',
					end: 'top 35%',
					toggleActions: 'play none none reverse',
				},
			})
		}, sectionRef)

		return () => ctx.revert()
	}, [])

	return (
		<section className={styles.section} ref={sectionRef}>
			<div className={styles.grid}>
				{galleryImages.map((item, index) => (
					<div
						key={`${item.alt}-${index}`}
						className={styles.card}
						data-side={item.side}
						data-gallery-card
					>
						<Image
							src={item.src}
							alt={item.alt}
							className={styles.image}
							unoptimized
						/>
					</div>
				))}
			</div>
		</section>
	)
}

export default Gallery

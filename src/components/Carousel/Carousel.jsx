'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import styles from './Carousel.module.css'

export default function Carousel({ slides = [], autoPlay = true, autoPlayInterval = 5000 }) {
	const [current, setCurrent] = useState(0)
	const [prev, setPrev] = useState(null)
	const [direction, setDirection] = useState(1)
	const timerRef = useRef(null)
	const autoPlayRef = useRef(autoPlay)
	autoPlayRef.current = autoPlay

	const goTo = useCallback(
		(index, dir) => {
			const d = dir ?? (index > current ? 1 : -1)
			setPrev(current)
			setDirection(d)
			setCurrent(index)
		},
		[current]
	)

	const next = useCallback(() => {
		goTo((current + 1) % slides.length, 1)
	}, [current, slides.length, goTo])

	const prevSlide = useCallback(() => {
		goTo((current - 1 + slides.length) % slides.length, -1)
	}, [current, slides.length, goTo])

	useEffect(() => {
		if (!autoPlayRef.current || slides.length <= 1) return
		timerRef.current = setInterval(next, autoPlayInterval)
		return () => clearInterval(timerRef.current)
	}, [next, autoPlayInterval, slides.length])

	const restart = useCallback(() => {
		clearInterval(timerRef.current)
		timerRef.current = setInterval(next, autoPlayInterval)
	}, [next, autoPlayInterval])

	if (!slides.length) return null

	const { tagline, overlay } = slides[current]

	return (
		<div className={styles.root}>
			{slides.map(({ image }, i) => (
				<div
					key={i}
					className={`${styles.slide} ${
						i === current
							? styles.slideActive
							: i === prev
							? styles.slidePrev
							: styles.slideHidden
					}`}
					style={{ '--dir': direction }}
				>
					<Image
						src={image}
						alt=''
						fill
						className={styles.image}
						priority={i === 0}
						sizes='100vw'
					/>
				</div>
			))}

			<div
				className={styles.overlay}
				style={{ '--opacity': overlay ?? 0.4 }}
				aria-hidden='true'
			/>

			{tagline && (
				<div className={styles.taglineWrap}>
					<p className={styles.tagline}>{tagline}</p>
				</div>
			)}

			{slides.length > 1 && (
				<>
					<button
						className={`${styles.arrow} ${styles.arrowLeft}`}
						onClick={() => { prevSlide(); restart() }}
						aria-label='Previous slide'
					>
						<svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
							<path d='M13 3L6 10L13 17' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
						</svg>
					</button>
					<button
						className={`${styles.arrow} ${styles.arrowRight}`}
						onClick={() => { next(); restart() }}
						aria-label='Next slide'
					>
						<svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
							<path d='M7 3L14 10L7 17' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
						</svg>
					</button>

					<div className={styles.dots}>
						{slides.map((_, i) => (
							<button
								key={i}
								className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
								onClick={() => { goTo(i); restart() }}
								aria-label={`Go to slide ${i + 1}`}
							/>
						))}
					</div>
				</>
			)}
		</div>
	)
}

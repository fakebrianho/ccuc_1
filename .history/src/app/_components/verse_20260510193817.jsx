'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import styles from './verse.module.css'

gsap.registerPlugin(ScrollTrigger, SplitText)

function Verse({
	text = 'Building communities with faith, action, and purpose.',
	className = '',
}) {
	const sectionRef = useRef(null)
	const textRef = useRef(null)

	useLayoutEffect(() => {
		let split

		const ctx = gsap.context(() => {
			split = new SplitText(textRef.current, {
				type: 'lines,chars',
				linesClass: 'line',
			})

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 82%',
					end: 'center center',
					scrub: 0.8,
				},
			})

			tl.from(split.chars, {
				yPercent: 120,
				opacity: 0,
				ease: 'none',
				stagger: 0.02,
			})
		}, sectionRef)

		return () => {
			if (split) split.revert()
			ctx.revert()
		}
	}, [])

	return (
		<section
			className={`${styles.section} ${className}`.trim()}
			ref={sectionRef}
		>
			<div className={styles.textStack}>
				<p className={styles.ghostText} aria-hidden='true'>
					{text}
				</p>
				<p className={styles.text} ref={textRef}>
					{text}
				</p>
			</div>
		</section>
	)
}

export default Verse

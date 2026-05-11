'use client'

import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import styles from './ChurchNav.module.css'

const tabs = [
	{ id: 'chinatown', label: 'Chinatown' },
	{ id: 'south', label: 'South' },
	{ id: 'west', label: 'West' },
]

const tabContent = {
	overview: <div>Overview content goes here.</div>,
	services: <div>Services content goes here.</div>,
	ministries: <div>Ministries content goes here.</div>,
	contact: <div>Contact content goes here.</div>,
}

export default function ChurchNav() {
	const [active, setActive] = useState('overview')
	const contentRef = useRef(null)

	const handleTabClick = (id) => {
		if (id === active) return
		const el = contentRef.current
		gsap.to(el, {
			opacity: 0,
			y: 6,
			duration: 0.15,
			ease: 'power2.in',
			onComplete: () => {
				setActive(id)
			},
		})
	}

	useEffect(() => {
		const el = contentRef.current
		gsap.fromTo(
			el,
			{ opacity: 0, y: 6 },
			{ opacity: 1, y: 0, duration: 0.2, ease: 'power2.out' },
		)
	}, [active])

	return (
		<div className={styles.wrapper}>
			<nav className={styles.nav}>
				{tabs.map((tab) => (
					<button
						key={tab.id}
						className={`${styles.tab} ${active === tab.id ? styles.active : ''}`}
						onClick={() => handleTabClick(tab.id)}
					>
						{tab.label}
					</button>
				))}
			</nav>
			<div ref={contentRef} className={styles.content}>
				{tabContent[active]}
			</div>
		</div>
	)
}

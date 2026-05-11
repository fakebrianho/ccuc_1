'use client'

import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/translations'
import styles from './ChurchNav.module.css'
import ChinatownContent from './chinatown/ChinatownContent'

export default function ChurchNav() {
	const { lang } = useLanguage()
	const tx = t[lang].churches
	const [active, setActive] = useState('chinatown')

	const tabs = [
		{ id: 'chinatown', label: tx.tabs.chinatown },
		{ id: 'south', label: tx.tabs.south },
		{ id: 'west', label: tx.tabs.west },
	]

	const tabContent = {
		chinatown: <ChinatownContent />,
		south: <div style={{ color: 'rgba(255,255,255,0.5)' }}>{tx.tabs.south}</div>,
		west: <div style={{ color: 'rgba(255,255,255,0.5)' }}>{tx.tabs.west}</div>,
	}
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

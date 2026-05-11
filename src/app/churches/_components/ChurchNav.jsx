'use client'

import { useState, useRef, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import gsap from 'gsap'
import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/translations'
import styles from './ChurchNav.module.css'
import ChinatownContent from './chinatown/ChinatownContent'
import SouthContent from './south/SouthContent'
import WestContent from './west/WestContent'

const VALID_TABS = ['chinatown', 'south', 'west']

export default function ChurchNav() {
	const { lang } = useLanguage()
	const tx = t[lang].churches
	const searchParams = useSearchParams()
	const navRef = useRef(null)

	const initialTab = VALID_TABS.includes(searchParams.get('campus'))
		? searchParams.get('campus')
		: 'chinatown'

	const [active, setActive] = useState(initialTab)

	useEffect(() => {
		const campus = searchParams.get('campus')
		if (VALID_TABS.includes(campus) && campus !== active) {
			setActive(campus)
		}
		if (searchParams.get('campus')) {
			navRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const tabs = [
		{ id: 'chinatown', label: tx.tabs.chinatown },
		{ id: 'south', label: tx.tabs.south },
		{ id: 'west', label: tx.tabs.west },
	]

	const tabContent = {
		chinatown: <ChinatownContent />,
		south: <SouthContent />,
		west: <WestContent />,
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
		<div ref={navRef} className={styles.wrapper}>
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

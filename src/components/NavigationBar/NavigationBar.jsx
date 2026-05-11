'use client'

import React from 'react'
import logo from '@/assets/images/Logo.svg'
import Image from 'next/image'
import styles from './NavigationBar.module.css'
import NavButtons from './NavButtons/NavButtons'
import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/translations'

function NavigationBar() {
	const { lang, toggleLang } = useLanguage()
	const tx = t[lang].nav

	const navLinks = [
		{ label: tx.aboutUs, href: '/about' },
		{ label: tx.churches, href: '/churches' },
		{ label: tx.events, href: '/events' },
		{ label: tx.giving, href: '/giving' },
	]

	return (
		<div className={styles.container}>
			<Image src={logo} alt={'Logo of CCUC Chinatown'} width={240} />
			<div className={styles.buttons}>
				{navLinks.map((link) => (
					<NavButtons key={link.href} label={link.label} href={link.href} />
				))}
				<button className={styles.langToggle} onClick={toggleLang}>
					{tx.toggleLabel}
				</button>
			</div>
		</div>
	)
}

export default NavigationBar

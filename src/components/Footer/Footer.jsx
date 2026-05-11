'use client'

import React from 'react'
import Image from 'next/image'
import logo from '@/assets/images/Logo.svg'
import styles from './Footer.module.css'
import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/translations'

function Footer() {
	const { lang } = useLanguage()
	const { sections } = t[lang].footer

	return (
		<footer className={styles.footer}>
			<div className={styles.grid}>
				<div className={styles.logoColumn}>
					<Image src={logo} alt='Logo of CCUC Chinatown' width={220} />
				</div>

				{sections.map((section) => (
					<div key={section.title} className={styles.linkColumn}>
						<h3 className={styles.heading}>{section.title}</h3>
						<div className={styles.links}>
							{section.links.map((link) => (
								<a
									key={link.label}
									href={link.href}
									className={styles.link}
									target={link.href.startsWith('http') ? '_blank' : undefined}
									rel={
										link.href.startsWith('http')
											? 'noreferrer noopener'
											: undefined
									}
								>
									{link.label}
								</a>
							))}
						</div>
					</div>
				))}
			</div>
		</footer>
	)
}

export default Footer

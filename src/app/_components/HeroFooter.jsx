'use client'

import React from 'react'
import Link from 'next/link'
import styles from './HeroFooter.module.css'
import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/translations'

function HeroFooter() {
	const { lang } = useLanguage()
	const tx = t[lang].heroFooter

	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<h3>{tx.heading}</h3>
				<p>{tx.subheading}</p>
			</div>
			<Link href='/plan' className={styles.cta}>
				{tx.cta}
			</Link>
		</div>
	)
}

export default HeroFooter

'use client'

import React from 'react'
import styles from './plan.module.css'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/translations'

function Plan() {
	const { lang } = useLanguage()
	const tx = t[lang].plan

	return (
		<section className={styles.plan}>
			<div className={styles.inner}>
				<p className={styles.tagline}>{tx.tagline}</p>
				<h1 className={styles.header}>
					{tx.header1}<span>{tx.header2}</span>
				</h1>
				<p className={styles.content}>{tx.content}</p>
				<div className={styles.buttons}>
					<Link href='/plan' className={styles.planButton}>
						{tx.planButton}
					</Link>
					<Link href='/contact' className={styles.contactButton}>
						{tx.contactButton}
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Plan

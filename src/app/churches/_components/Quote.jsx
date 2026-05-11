'use client'

import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/translations'
import styles from './Quote.module.css'

export default function Quote() {
	const { lang } = useLanguage()
	const tx = t[lang].churchesQuote

	return (
		<div className={styles.container}>
			<div className={styles.inner}>
				{tx.lines.map((line, i) => (
					<p key={i}>{line}</p>
				))}
			</div>
			<p className={styles.end}>{tx.end}</p>
		</div>
	)
}

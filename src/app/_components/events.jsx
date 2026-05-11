'use client'

import React from 'react'
import styles from './events.module.css'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/translations'

function Events() {
	const { lang } = useLanguage()
	const tx = t[lang].events

	return (
		<section className={styles.container}>
			<div className={styles.header}>
				<hr className={styles.divider} />
				<h3 className={styles.intro}>{tx.intro}</h3>
			</div>
			<div className={styles.titleContainer}>
				<h1 className={styles.upcoming}>{tx.upcoming}</h1>
				<h1 className={styles.events}>{tx.events}</h1>
				<p>{tx.subheading}</p>
				<Link href='/events' className={styles.viewAll}>
					{tx.viewAll}
				</Link>
			</div>
			<div className={styles.eventContainer}>
				{tx.list.map((event) => (
					<div
						key={`${event.month}-${event.day}-${event.title}`}
						className={styles.eventRow}
					>
						<div className={styles.dateBlock}>
							<h4 className={styles.month}>{event.month}</h4>
							<p className={styles.day}>{event.day}</p>
						</div>
						<div className={styles.contentBlock}>
							<h3 className={styles.eventName}>{event.title}</h3>
							<p className={styles.eventDescription}>{event.description}</p>
						</div>
						<div className={styles.typeCell}>
							<div className={`${styles.typeBadge} ${styles[event.typeClass]}`}>
								{event.typeLabel}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Events

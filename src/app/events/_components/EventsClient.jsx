'use client'

import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { useCallback } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/translations'
import {
	events,
	TYPE_COLORS,
	filterEvents,
	formatDate,
} from '../_data/events'
import styles from '../events.module.css'

function groupByMonth(events, locale) {
	const months = {}
	for (const e of events) {
		const d = new Date(e.date + 'T00:00:00')
		const key = d.toLocaleString(locale, { month: 'long', year: 'numeric' })
		if (!months[key]) months[key] = []
		months[key].push(e)
	}
	return months
}

function Badge({ label, variant }) {
	return <span className={`${styles.badge} ${styles[`badge_${variant}`]}`}>{label}</span>
}

function TypeBadge({ typeLabel, typeLabelEn }) {
	const c = TYPE_COLORS[typeLabelEn] || TYPE_COLORS.SERVICE
	return (
		<span
			className={styles.typeBadge}
			style={{ background: c.bg, borderColor: c.border, color: c.text }}
		>
			{typeLabel}
		</span>
	)
}

function SiteCongBadges({ site, congregation, siteLabels, congLabels }) {
	return (
		<div className={styles.badgeRow}>
			<Badge label={siteLabels[site]} variant={site === 'all' ? 'all' : 'site'} />
			{congregation !== 'all' && (
				<Badge label={congLabels[congregation]} variant='cong' />
			)}
		</div>
	)
}

function FeaturedCard({ event, siteLabels, congLabels, lang, locale }) {
	return (
		<article className={styles.featuredCard}>
			<div className={styles.featuredCardInner}>
				<div className={styles.featuredTop}>
					<SiteCongBadges site={event.site} congregation={event.congregation} siteLabels={siteLabels} congLabels={congLabels} />
					<TypeBadge typeLabel={event.typeLabel[lang]} typeLabelEn={event.typeLabel.en} />
				</div>
				<div className={styles.featuredBody}>
					<p className={styles.featuredDate}>{formatDate(event.date, locale)} · {event.time[lang]}</p>
					<h2 className={styles.featuredTitle}>{event.title[lang]}</h2>
					<p className={styles.featuredDesc}>{event.description[lang]}</p>
					<p className={styles.featuredLocation}>{event.location[lang]}</p>
				</div>
			</div>
		</article>
	)
}

function EventRow({ event, siteLabels, congLabels, lang, locale }) {
	const d = new Date(event.date + 'T00:00:00')
	const month = d.toLocaleString(locale, { month: 'short' }).toUpperCase()
	const day = d.getDate()

	return (
		<div className={styles.eventRow}>
			<div className={styles.eventDate}>
				<span className={styles.eventMonth}>{month}</span>
				<span className={styles.eventDay}>{day}</span>
			</div>
			<div className={styles.eventContent}>
				<div className={styles.eventTitleRow}>
					<h3 className={styles.eventTitle}>{event.title[lang]}</h3>
				</div>
				<p className={styles.eventMeta}>{event.time[lang]} · {event.location[lang]}</p>
				<p className={styles.eventDesc}>{event.description[lang]}</p>
			</div>
			<div className={styles.eventRight}>
				<TypeBadge typeLabel={event.typeLabel[lang]} typeLabelEn={event.typeLabel.en} />
				<SiteCongBadges site={event.site} congregation={event.congregation} siteLabels={siteLabels} congLabels={congLabels} />
			</div>
		</div>
	)
}

export default function EventsClient() {
	const { lang } = useLanguage()
	const tx = t[lang].eventsPage
	const locale = lang === 'zh' ? 'zh-CN' : 'en-US'

	const searchParams = useSearchParams()
	const router = useRouter()
	const pathname = usePathname()

	const site = searchParams.get('site') || 'all'
	const congregation = searchParams.get('congregation') || 'all'

	const setFilter = useCallback(
		(key, value) => {
			const params = new URLSearchParams(searchParams.toString())
			params.set(key, value)
			router.replace(`${pathname}?${params.toString()}`, { scroll: false })
		},
		[searchParams, router, pathname]
	)

	const filtered = filterEvents(events, site, congregation)
	const featured = filtered.filter((e) => e.featured)
	const listed = filtered.filter((e) => !e.featured)
	const grouped = groupByMonth(listed, locale)
	const totalCount = filtered.length

	return (
		<div className={styles.page}>
			<div className={styles.pageHeader}>
				<p className={styles.eyebrow}>{tx.eyebrow}</p>
				<h1 className={styles.heading}>{tx.heading}</h1>
			</div>

			<div className={styles.filterBar}>
				<div className={styles.filterGroup}>
					<span className={styles.filterLabel}>{tx.filterSite}</span>
					<div className={styles.pills}>
						{tx.sites.map((s) => (
							<button
								key={s.value}
								className={`${styles.pill} ${site === s.value ? styles.pillActive : ''}`}
								onClick={() => setFilter('site', s.value)}
							>
								{s.label}
							</button>
						))}
					</div>
				</div>
				<div className={styles.filterGroup}>
					<span className={styles.filterLabel}>{tx.filterCongregation}</span>
					<div className={styles.pills}>
						{tx.congregations.map((c) => (
							<button
								key={c.value}
								className={`${styles.pill} ${congregation === c.value ? styles.pillActive : ''}`}
								onClick={() => setFilter('congregation', c.value)}
							>
								{c.label}
							</button>
						))}
					</div>
				</div>
				<span className={styles.count}>{tx.eventCount(totalCount)}</span>
			</div>

			{featured.length > 0 && (
				<section className={styles.featuredSection}>
					<p className={styles.sectionLabel}>{tx.featured}</p>
					<div className={styles.featuredGrid}>
						{featured.map((e) => (
							<FeaturedCard key={e.id} event={e} siteLabels={tx.siteLabels} congLabels={tx.congLabels} lang={lang} locale={locale} />
						))}
					</div>
				</section>
			)}

			{Object.keys(grouped).length > 0 ? (
				<section className={styles.listSection}>
					{Object.entries(grouped).map(([month, monthEvents]) => (
						<div key={month} className={styles.monthGroup}>
							<p className={styles.monthLabel}>{month}</p>
							<div className={styles.monthRows}>
								{monthEvents.map((e) => (
									<EventRow key={e.id} event={e} siteLabels={tx.siteLabels} congLabels={tx.congLabels} lang={lang} locale={locale} />
								))}
							</div>
						</div>
					))}
				</section>
			) : featured.length === 0 && (
				<div className={styles.empty}>{tx.empty}</div>
			)}
		</div>
	)
}

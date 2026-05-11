'use client'

import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { useCallback } from 'react'
import {
	events,
	SITES,
	CONGREGATIONS,
	TYPE_COLORS,
	SITE_LABELS,
	CONG_LABELS,
	filterEvents,
	groupByMonth,
	formatDate,
} from '../_data/events'
import styles from '../events.module.css'

function Badge({ label, variant }) {
	return <span className={`${styles.badge} ${styles[`badge_${variant}`]}`}>{label}</span>
}

function TypeBadge({ typeLabel }) {
	const c = TYPE_COLORS[typeLabel] || TYPE_COLORS.SERVICE
	return (
		<span
			className={styles.typeBadge}
			style={{ background: c.bg, borderColor: c.border, color: c.text }}
		>
			{typeLabel}
		</span>
	)
}

function SiteCongBadges({ site, congregation }) {
	return (
		<div className={styles.badgeRow}>
			<Badge
				label={SITE_LABELS[site]}
				variant={site === 'all' ? 'all' : 'site'}
			/>
			{congregation !== 'all' && (
				<Badge label={CONG_LABELS[congregation]} variant='cong' />
			)}
		</div>
	)
}

function FeaturedCard({ event }) {
	return (
		<article className={styles.featuredCard}>
			<div className={styles.featuredCardInner}>
				<div className={styles.featuredTop}>
					<SiteCongBadges site={event.site} congregation={event.congregation} />
					<TypeBadge typeLabel={event.typeLabel} />
				</div>
				<div className={styles.featuredBody}>
					<p className={styles.featuredDate}>{formatDate(event.date)} · {event.time}</p>
					<h2 className={styles.featuredTitle}>{event.title}</h2>
					{event.subtitle && <p className={styles.featuredSubtitle}>{event.subtitle}</p>}
					<p className={styles.featuredDesc}>{event.description}</p>
					<p className={styles.featuredLocation}>{event.location}</p>
				</div>
			</div>
		</article>
	)
}

function EventRow({ event }) {
	const d = new Date(event.date + 'T00:00:00')
	const month = d.toLocaleString('en-US', { month: 'short' }).toUpperCase()
	const day = d.getDate()

	return (
		<div className={styles.eventRow}>
			<div className={styles.eventDate}>
				<span className={styles.eventMonth}>{month}</span>
				<span className={styles.eventDay}>{day}</span>
			</div>
			<div className={styles.eventContent}>
				<div className={styles.eventTitleRow}>
					<h3 className={styles.eventTitle}>{event.title}</h3>
					{event.subtitle && <span className={styles.eventSubtitle}>{event.subtitle}</span>}
				</div>
				<p className={styles.eventMeta}>{event.time} · {event.location}</p>
				<p className={styles.eventDesc}>{event.description}</p>
			</div>
			<div className={styles.eventRight}>
				<TypeBadge typeLabel={event.typeLabel} />
				<SiteCongBadges site={event.site} congregation={event.congregation} />
			</div>
		</div>
	)
}

export default function EventsClient() {
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
	const grouped = groupByMonth(listed)
	const totalCount = filtered.length

	return (
		<div className={styles.page}>
			{/* header */}
			<div className={styles.pageHeader}>
				<p className={styles.eyebrow}>Events</p>
				<h1 className={styles.heading}>What&apos;s Happening</h1>
			</div>

			{/* sticky filter bar */}
			<div className={styles.filterBar}>
				<div className={styles.filterGroup}>
					<span className={styles.filterLabel}>Site</span>
					<div className={styles.pills}>
						{SITES.map((s) => (
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
					<span className={styles.filterLabel}>Congregation</span>
					<div className={styles.pills}>
						{CONGREGATIONS.map((c) => (
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
				<span className={styles.count}>{totalCount} event{totalCount !== 1 ? 's' : ''}</span>
			</div>

			{/* featured */}
			{featured.length > 0 && (
				<section className={styles.featuredSection}>
					<p className={styles.sectionLabel}>Featured</p>
					<div className={styles.featuredGrid}>
						{featured.map((e) => <FeaturedCard key={e.id} event={e} />)}
					</div>
				</section>
			)}

			{/* grouped list */}
			{Object.keys(grouped).length > 0 ? (
				<section className={styles.listSection}>
					{Object.entries(grouped).map(([month, monthEvents]) => (
						<div key={month} className={styles.monthGroup}>
							<p className={styles.monthLabel}>{month}</p>
							<div className={styles.monthRows}>
								{monthEvents.map((e) => <EventRow key={e.id} event={e} />)}
							</div>
						</div>
					))}
				</section>
			) : featured.length === 0 && (
				<div className={styles.empty}>No events match this filter.</div>
			)}
		</div>
	)
}

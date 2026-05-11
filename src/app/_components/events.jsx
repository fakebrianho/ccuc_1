import React from 'react'
import styles from './events.module.css'
import Link from 'next/link'

const eventsList = [
	{
		month: 'MAY',
		day: '18',
		title: 'Youth Worship Night',
		description: 'An evening of worship, prayer, and fellowship for students and young adults.',
		typeLabel: 'WORSHIP',
		typeClass: 'typeWorship',
	},
	{
		month: 'MAY',
		day: '24',
		title: 'Neighborhood Outreach',
		description: 'Serve local families through meal distribution and community support activities.',
		typeLabel: 'OUTREACH',
		typeClass: 'typeOutreach',
	},
	{
		month: 'JUN',
		day: '02',
		title: 'Leadership Training',
		description: 'Practical training for team leaders focused on ministry care and discipleship.',
		typeLabel: 'TRAINING',
		typeClass: 'typeTraining',
	},
]

function Events() {
	return (
		<section className={styles.container}>
			<div className={styles.header}>
				<hr className={styles.divider} />
				<h3 className={styles.intro}>What's Happening?</h3>
			</div>
			<div className={styles.titleContainer}>
				<h1 className={styles.upcoming}>Upcoming</h1>
				<h1 className={styles.events}>Events</h1>
				<p>
					From worship nights to outreach projects, there's always
					something to be a <br></br>part of.
				</p>
				<Link href='/events' className={styles.viewAll}>
					VIEW ALL EVENTS
				</Link>
			</div>
			<div className={styles.eventContainer}>
				{eventsList.map((event) => (
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

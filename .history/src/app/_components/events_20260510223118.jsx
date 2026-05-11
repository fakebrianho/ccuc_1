import React from 'react'
import styles from './events.module.css'
import Link from 'next/link'

function Events() {
	return (
		<>
			<div className={styles.header}>
				<hr className={styles.divider} />
				<h3 className={styles.intro}>What's Happening?</h3>
			</div>
			<div className={styles.titleContainer}>
				<h1 className={styles.upcoming}>Upcoming</h1>
				<h1 className={styles.events}>Events</h1>
				<p>
					From worship nights to outreach projects, there's always \n
					something to be a part of.
				</p>
				<Link href='/events' className={styles.viewAll}>
					VIEW ALL EVENTS
				</Link>
			</div>
		</>
	)
}

export default Events

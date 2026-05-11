import React from 'react'
import styles from './events.module.css'

function Events() {
	return (
		<>
			<div className={styles.header}>
				<hr className={styles.divider} />
				<h3 className={styles.intro}>What's Happening?</h3>
			</div>
            <div className={styles.titleContainer}>
                <h1>Upcoming</h1>
                <h1>Upcoming</h1>
            </div>
		</>
	)
}

export default Events

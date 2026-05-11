import React from 'react'
import styles from './plan.module.css'
import Link from 'next/link'

function Plan() {
	return (
		<section className={styles.plan}>
			<div>
				<p className={styles.tagline}>PLAN YOUR VISIT</p>
				<h1 className={styles.header}>Come as you are</h1>
				<p className={styles.content}>
					Whether you're exploring your faith for hte first time or
					looking for a new church home, we'd love to welcome you this
					Sunday.
				</p>
				<div className={styles.buttons}>
					<Link href='/plan' className={styles.planButton}>
						PLAN YOUR VISIT
					</Link>
					<Link href='/contact' className={styles.contactButton}>
						CONTACT US
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Plan
{
	/* <Link href='/events' className={styles.viewAll}>
VIEW ALL EVENTS
</Link> */
}

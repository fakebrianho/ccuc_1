import React from 'react'
import styles from './plan.module.css'

function Plan() {
	return (
		<section className={styles.plan}>
			<p className={styles.tagline}>PLAN YOUR VISIT</p>
			<h1 className={styles.header}>Come as you are</h1>
            <p className={styles.content}>Whether you're exploring your faith for hte first time or looking for a new church home, we'd love to welcome you this Sunday.</p>
            <div className={styles.buttons}>
                <div></div>
                <div></div>
            </div>
		</section>
	)
}

export default Plan

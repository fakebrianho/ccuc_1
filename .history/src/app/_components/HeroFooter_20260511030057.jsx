import React from 'react'
import Link from 'next/link'
import styles from './HeroFooter.module.css'

function HeroFooter() {
	return (
		<div className={styles.container}>
			<div>
				<h3>Welcome to CCUC</h3>
				<p>A place to grow in faith & community</p>
			</div>
			<Link href='/plan' className={styles.cta}>
				Plan Your Visit
			</Link>
		</div>
	)
}

export default HeroFooter

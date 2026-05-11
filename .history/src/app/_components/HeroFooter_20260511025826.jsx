import React from 'react'
import Link from 'next/link'
import styles from './HeroFooter.module.css'

function HeroFooter() {
	return (
		<div>
			<div>
				<h3>Welcome to CCUC</h3>
				<p>A place to grow in faith & community</p>
			</div>
			<Link href='/plan'>Plan Your Visit</Link>
		</div>
	)
}

export default HeroFooter

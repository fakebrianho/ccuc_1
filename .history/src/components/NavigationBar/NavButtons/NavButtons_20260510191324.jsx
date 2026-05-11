import React from 'react'
import Link from 'next/link'
import styles from './NavButtons.module.css'

function NavButtons({ label, href }) {
	return (
		<Link className={styles.button} href={href}>
			{label}
		</Link>
	)
}

export default NavButtons
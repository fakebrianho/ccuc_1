import React from 'react'
import Link from 'next/link'
import styles from './NavButtons.module.css'

function NavButtons({ label, href, openInNewTab = false }) {
	const isExternalHref = /^https?:\/\//.test(href)
	const useAnchorTag = openInNewTab || isExternalHref

	if (useAnchorTag) {
		return (
			<a
				className={styles.button}
				href={href}
				target='_blank'
				rel='noopener noreferrer'
			>
				{label}
			</a>
		)
	}

	return (
		<Link className={styles.button} href={href}>
			{label}
		</Link>
	)
}

export default NavButtons
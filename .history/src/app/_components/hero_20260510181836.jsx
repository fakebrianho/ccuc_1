import React from 'react'
import styles from './hero.module.css'

function hero() {
	return (
		<video
			className={styles.hero}
			autoPlay
			muted
			loop
			playsInline
			preload='metadata'
			aria-hidden='true'
		>
			<source src='/videos/hero.webm' type='video/webm' />
			<source src='/videos/hero.mp4' type='video/mp4' />
		</video>
	)
}

export default hero

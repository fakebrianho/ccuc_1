import React from 'react'
import logo from '@/assets/images/logo.png'
import Image from 'next/image'
import styles from './NavigationBar.module.css'

function navigationBar() {
	return (
		<div className={styles.container}>
			<Image
				src={logo}
				alt={'Logo of CCUC Chinatown'}
				sizes='(max-width: 168px)'
			/>
			<div className={styles.buttons}>
				<div>temp</div>
				<div>temp</div>
				<div>temp</div>
				<div>temp</div>
			</div>
			<video
				autoPlay
				muted
				loop
				playsInline
				preload='metadata'
				// poster='/images/hero-aaaaaaaaaaaaaaaaaaaaaaaaaaaaaposter.jpg'
				aria-hidden='true'
			>
				<source src='/videos/hero.webm' type='video/webm' />
				<source src='/videos/hero.mp4' type='video/mp4' />
			</video>
		</div>
	)
}

export default navigationBar

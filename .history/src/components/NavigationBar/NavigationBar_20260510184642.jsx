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
				width={140}
				quality={100}
			/>
			<div className={styles.buttons}>
				<div>temp</div>
				<div>temp</div>
				<div>temp</div>
				<div>temp</div>
			</div>
		</div>
	)
}

export default navigationBar

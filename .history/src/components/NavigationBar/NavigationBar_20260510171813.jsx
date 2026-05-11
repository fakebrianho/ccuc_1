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
			<div className={}></div>
		</div>
	)
}

export default navigationBar

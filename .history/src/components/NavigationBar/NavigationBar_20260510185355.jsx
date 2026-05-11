import React from 'react'
import logo from '@/assets/images/Logo.svg'
import Image from 'next/image'
import styles from './NavigationBar.module.css'
import NavButtons from './NavButtons/NavButtons'

const navLinks = [
	{ label: 'About Us', href: '/about' },
	{ label: 'Churches', href: '/about' },
	{ label: 'Programs', href: '/programs' },
	{ label: 'Contact', href: '/contact' },
]

function navigationBar() {
	return (
		<div className={styles.container}>
			<Image src={logo} alt={'Logo of CCUC Chinatown'} width={240} />
			<div className={styles.buttons}>
				{navLinks.map((link) => (
					<NavButtons key={link.href} label={link.label} href={link.href} />
				))}
			</div>
		</div>
	)
}

export default navigationBar

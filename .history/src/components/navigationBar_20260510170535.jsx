import React from 'react'
import logo from '@/assets/images/logo.png'
import Image from 'next/image'

function navigationBar() {
	return (
		<div>
			<Image
				src={logo}
				alt={'Logo of CCUC Chinatown'}
				sizes='(max-width: 168px)'
			/>
			<div>navigationBar</div>
		</div>
	)
}

export default navigationBar

import React from 'react'
import logo from '@/assets/images/logo.png'
import Image from 'next/image'

function navigationBar() {
	return (
		<>
			<Image src={logo} alt={'Logo of tCC'}/>
			<div>navigationBar</div>
		</>
	)
}

export default navigationBar

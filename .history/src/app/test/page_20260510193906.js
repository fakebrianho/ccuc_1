import React from 'react'
import NavigationBar from '@/components/NavigationBar/NavigationBar'
import Hero from '../_components/hero'
import Verse from '../_components/verse'

function page() {
	return (
		<div className='container'>
			<section className='section'>
				<NavigationBar />
				<Hero />
			</section>
			<Verse text='' />
		</div>
	)
}

export default page

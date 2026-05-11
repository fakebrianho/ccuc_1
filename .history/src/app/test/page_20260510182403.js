import React from 'react'
import NavigationBar from '@/components/NavigationBar/NavigationBar'
import Hero from '../_components/hero'

function page() {
	return (
		<div className='container'>
			<section className='section'>
				<NavigationBar />
				<Hero />
			</section>
		</div>
	)
}

export default page

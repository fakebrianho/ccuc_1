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
			<section></section>
			<section>
				<Verse
					text='“I have come that they may have life, and have it to the full.” 
John 10:10'
				/>
			</section>
		</div>
	)
}

export default page

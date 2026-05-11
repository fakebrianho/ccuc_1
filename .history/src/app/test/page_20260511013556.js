import React from 'react'
import NavigationBar from '@/components/NavigationBar/NavigationBar'
import Hero from '../_components/hero'
import Verse from '../_components/verse'
import Gallery from '../_components/gallery'
import Locations from '../_components/locations'
import Events from '../_components/events'

function page() {
	return (
		<div className='container'>
			<section className='section'>
				<NavigationBar />
				<Hero />
			</section>
			<section></section>
			<section className='section-flex-center'>
				<Verse
					text='“I have come that they may have life, and have it to the full.” 
John 10:10'
				/>
			</section>
			<section className='section-unrounded'>
				<Gallery />
			</section>
			<section className='section-unrounded-locations'>
				<Locations />
			</section>
			<section>
				<Events />
			</section>
		</div>
	)
}

export default page

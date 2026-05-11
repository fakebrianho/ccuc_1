'use client'

import React from 'react'
import NavigationBar from '@/components/NavigationBar/NavigationBar'
import Hero from '../_components/hero'
import Verse from '../_components/verse'
import Gallery from '../_components/gallery'
import Locations from '../_components/locations'
import Events from '../_components/events'
import Plan from '../_components/plan'
import Footer from '@/components/Footer/Footer'
import HeroFooter from '../_components/HeroFooter'
import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/translations'

function Page() {
	const { lang } = useLanguage()

	return (
		<div className='container'>
			<section className='section'>
				<NavigationBar />
				<Hero />
				<HeroFooter />
			</section>
			<section className='section-flex-center'>
				<Verse key={lang} text={t[lang].verse} />
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
			<section>
				<Plan />
			</section>
			<Footer />
		</div>
	)
}

export default Page

'use client'
import React from 'react'

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
'use client'

import React from 'react'
import NavigationBar from '@/components/NavigationBar/NavigationBar'
import Footer from '@/components/Footer/Footer'
import Quote from './_components/Quote'
import ChurchNav from './_components/ChurchNav'
import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/translations'

export default function ChurchesPage() {
	const { lang } = useLanguage()
	const tx = t[lang].about
	return (
		<div className='container'>
			<NavigationBar />
			<main>
				<Quote />
				<ChurchNav />
			</main>
			<Footer />
		</div>
	)
}

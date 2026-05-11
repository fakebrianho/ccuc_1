'use client'

import React, { Suspense } from 'react'
import NavigationBar from '@/components/NavigationBar/NavigationBar'
import Footer from '@/components/Footer/Footer'
import Quote from './_components/Quote'
import ChurchNav from './_components/ChurchNav'

export default function ChurchesPage() {
	return (
		<div className='container'>
			<NavigationBar />
			<main>
				<Quote />
				<Suspense>
					<ChurchNav />
				</Suspense>
			</main>
			<Footer />
		</div>
	)
}

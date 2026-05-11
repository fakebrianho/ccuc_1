import { Suspense } from 'react'
import NavigationBar from '@/components/NavigationBar/NavigationBar'
import Footer from '@/components/Footer/Footer'
import EventsClient from './_components/EventsClient'

export default function EventsPage() {
	return (
		<div className='container'>
			<NavigationBar />
			<Suspense fallback={null}>
				<EventsClient />
			</Suspense>
			<Footer />
		</div>
	)
}

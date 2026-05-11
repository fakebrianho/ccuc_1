'use client'
import React from 'react'
import NavigationBar from '@/components/NavigationBar/NavigationBar'
import Footer from '@/components/Footer/Footer'
import Accordion from './_components/Accordion'
import styles from './about.module.css'
import Carousel from '@/components/Carousel/Carousel'
import img1 from '@/assets/images/1.jpg'
import img2 from '@/assets/images/2.jpg'
import img3 from '@/assets/images/3.jpg'
import img4 from '@/assets/images/4.jpg'

const faqItems = [
	{
		question: 'Who We Are',
		answer: `Chinese Christian Union Church (CCUC) is a multi-generational church rooted in Chicago's Chinatown. Founded over a century ago, we exist to worship God, build community, and serve our neighbors across racial and cultural lines.`,
	},
	{
		question: 'Our Mission',
		answer: `We are called to make disciples of all nations — beginning in our own city. Through worship, teaching, and outreach, we pursue a faith that is alive, active, and deeply connected to the people around us.`,
	},
	{
		question: 'Our Beliefs',
		answer: `<strong>Bible</strong>
The entire Bible, Old and New Testaments, in its original manuscripts is the inerrant, inspired word of God and the ultimate authority for Christian faith and life.
Triune God
We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit. Jesus Christ is fully God and fully man, born of the Virgin Mary, died for our sins, rose bodily, ascended to heaven, and now serves as our Mediator, High Priest, and Advocate. The Holy Spirit, equal with the Father and Son, convicts, regenerates, indwells, and empowers believers.
Man
Created in God's image, man fell into sin through Adam, incurring condemnation and both physical and spiritual death. Helpless on his own, he needs God for salvation.
Salvation
Salvation comes only through Christ's shed blood and resurrection, received by repentance toward God and faith in Jesus Christ. Repentance and faith are inseparable. There is no other way of salvation, and the redeemed are eternally secure in Christ.
Church
The true Church consists of all who have been regenerated through faith in Christ and united in His body, with Him as the Head, existing to glorify God. Baptism and the Lord's Supper are ordinances observed by the church, but not means of salvation.
Second Coming of Christ
We believe in the personal and imminent return of Christ and the bodily resurrection of the dead—believers to everlasting joy with the Lord, and the unrighteous to judgment and everlasting conscious punishment.`,
	},
	{
		question: 'Our Locations',
		answer: 'CCUC gathers across three campuses in the greater Chicago area — Chinatown, South, and West — each reflecting the unique community it serves while sharing one vision and family.',
	},
	{
		question: 'Get Involved',
		answer: `There are many ways to plug in — join a small group, serve on a ministry team, or simply show up on a Sunday. Reach out to any of our campuses and we'd love to connect you.`,
	},
]

const carouselSlides = [
	{ image: img1, tagline: 'A church for the city', overlay: 0.4 },
	{ image: img2, tagline: 'Rooted in Chinatown since 1900', overlay: 0.35 },
	{ image: img3, tagline: 'Faith, action, and purpose', overlay: 0.45 },
	{ image: img4, tagline: 'Everyone is welcome here', overlay: 0.4 },
]

export default function AboutPage() {
	return (
		<div className='container'>
			<NavigationBar />
			<div className={styles.carouselWrap}>
				<Carousel slides={carouselSlides} />
			</div>
			<main className={styles.main}>
				<div className={styles.header}>
					<p className={styles.eyebrow}>About Us</p>
					<h1 className={styles.heading}>A church for the city</h1>
				</div>
				<Accordion items={faqItems} />
			</main>
			<Footer />
		</div>
	)
}

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
		question: 'Our Commitments',
		answer: (
			<div>
				<p>
					<strong>1. Worship</strong>
					<br />
					God created us to worship and enjoy Him (Psalm 95:6). We are
					committed to fostering a God-centered, vibrant, and
					inspiring atmosphere where people encounter His presence and
					worship in Spirit and truth.
				</p>

				<p>
					<strong>2. Prayer</strong>
					<br />
					Unceasing prayer is essential to a transforming relationship
					with God (1 Thess. 5:17). We are committed to being a
					prayer-saturated church where both corporate and individual
					prayer permeate every ministry, keeping us fully dependent
					on God.
				</p>

				<p>
					<strong>3. Biblical Teaching</strong>
					<br />
					The Bible is God's fully inspired word and ultimate
					authority (2 Tim. 3:16), forming the foundation of our
					beliefs and identity. We are committed to sound biblical
					teaching and preaching that equips us to share God's truth
					with the world.
				</p>

				<p>
					<strong>4. Missions</strong>
					<br />
					The church is called to the Great Commission&mdash;reaching
					the lost and making disciples of all nations (Matt.
					28:18-20; Acts 1:8). Following Jesus' example of ministering
					to body, soul, and spirit, we are committed to wholistic
					missions that serve both our local community and the
					nations.
				</p>

				<p>
					<strong>5. Discipleship</strong>
					<br />
					Discipleship is intentionally helping believers become more
					like Christ (2 Tim. 2:2). Following Jesus' relational model,
					we are committed to investing in the discipleship of
					believers of all ages so they grow into the fullness of
					Christ (Eph. 4:13).
				</p>

				<p>
					<strong>6. Family Ministry</strong>
					<br />
					The church is God's multi-generational household (1 Tim.
					3:15). We are committed to creating a spiritual community
					where everyone&mdash;regardless of age, gender, or marital
					status&mdash;is cared for and has a place of belonging.
				</p>

				<p>
					<strong>7. Multiculturalism</strong>
					<br />
					As a church shaped by multiple languages and both Chinese
					and western culture, we affirm that all are one in Christ
					(Gal. 3:28). We embrace our differences while speaking with
					one voice, treating every member and congregation fairly and
					equally.
				</p>

				<p>
					<strong>8. Unity</strong>
					<br />
					Church unity reflects the triune nature of God (John 10:30;
					2 Cor. 13:14) and provides a powerful witness to the world.
					We are committed to pursuing unity in our diversity, using
					our gifts together to build up the body of Christ.
				</p>
			</div>
		),
	},
	{
		question: 'Our Beliefs',
		answer: (
			<>
				<p>
					<strong>Bible</strong>
				</p>
				<p>
					The entire Bible, Old and New Testaments, in its original
					manuscripts is the inerrant, inspired word of God and the
					ultimate authority for Christian faith and life.
				</p>
				<p>
					<strong>Triune God</strong>
				</p>
				<p>
					We believe in one God, eternally existing in three persons:
					Father, Son, and Holy Spirit. Jesus Christ is fully God and
					fully man, born of the Virgin Mary, died for our sins, rose
					bodily, ascended to heaven, and now serves as our Mediator,
					High Priest, and Advocate. The Holy Spirit, equal with the
					Father and Son, convicts, regenerates, indwells, and
					empowers believers.
				</p>
				<p>
					<strong>Man</strong>
				</p>
				<p>
					Created in God's image, man fell into sin through Adam,
					incurring condemnation and both physical and spiritual
					death. Helpless on his own, he needs God for salvation.
				</p>
				<p>
					<strong>Salvation</strong>
				</p>
				<p>
					Salvation comes only through Christ's shed blood and
					resurrection, received by repentance toward God and faith in
					Jesus Christ. Repentance and faith are inseparable. There is
					no other way of salvation, and the redeemed are eternally
					secure in Christ.
				</p>
				<p>
					<strong>Church</strong>
				</p>
				<p>
					The true Church consists of all who have been regenerated
					through faith in Christ and united in His body, with Him as
					the Head, existing to glorify God. Baptism and the Lord's
					Supper are ordinances observed by the church, but not means
					of salvation.
				</p>
				<p>
					<strong>Second Coming of Christ</strong>
				</p>
				<p>
					We believe in the personal and imminent return of Christ and
					the bodily resurrection of the dead—believers to everlasting
					joy with the Lord, and the unrighteous to judgment and
					everlasting conscious punishment.
				</p>
			</>
		),
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
